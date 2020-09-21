/*!
 *	Copyright (C) 2020 浦 公統
 *	Released under the MIT license.
 *	see https://opensource.org/licenses/MIT/
 */

/**
 *	@file		anyCalculatorFramework.js
 *	@brief		なんでも計算フレームワーク
 *	@remark		formatDecimal.js が必要
 *	@version	1.2.0
 */

/**
 *	項目クラス (入出力項目クラスの親クラス)
 */
class itemBase
{
	/**
	 *	コンストラクタ
	 *	@param	title		項目タイトル
	 *	@param	id			項目ID
	 *	@param	unit		項目の単位 (省略時は空文字列)
	 *	@param	initValue	初期値 (省略時は null)
	 */
	constructor( title, id, unit = '', initValue = null )
	{
		this.title = title;
		this.id = id;
		this.unit = unit;
		this.initValue = initValue;
		this.element = null;
	}

	/**
	 *	数値用の INPUT 要素を設定し、初期値を表示
	 *	@param	element		数値用の INPUT 要素
	 */
	set valueElement( element )
	{
		this.element = element;
		element.value = ( this.initValue === null ) ? '' : this.initValue;
	}

	/**
	 *	数値用の INPUT 要素に数値を表示
	 *	@param	value		表示する数値
	 */
	set value( value )
	{
		this.element.value = value;
	}

	/**
	 *	表示されている数値を取得
	 */
	get value()
	{
		return this.element.value;
	}
}

/**
 *	入力項目クラス
 */
class itemInput extends itemBase
{
	/**
	 *	コンストラクタ
	 *	@param	title		項目タイトル
	 *	@param	id			項目ID
	 *	@param	unit		項目の単位 (省略時は空文字列)
	 *	@param	initValue	初期値 (省略時は null)
	 *	@param	isOptional	省略可否フラグ (省略時は false)
	 *						true : 空欄や、数値以外の入力時は、エラーとせず、入力値に NaN を入れて計算コールバック関数に渡す
	 *						false : 空欄や、数値以外の入力時はエラーとして、入力エラーコールバック関数を呼び出す
	 */
	constructor( title, id, unit = '', initValue = null, isOptional = false )
	{
		super( title, id, unit, initValue );
		this.isOptional = isOptional;
	}

	/**
	 *	数値用の INPUT 要素を設定し、初期値を表示
	 *	@param	area		数値用の INPUT 要素
	 */
	set valueElement( element )
	{
		super.valueElement = element;
		this.element.readOnly = false;
	}
}

/**
 *	出力項目クラス
 */
class itemOutput extends itemBase
{
	/**
	 *	コンストラクタ
	 *	@param	title		項目タイトル
	 *	@param	id			項目ID
	 *	@param	unit		項目の単位 (省略時は空文字列)
	 *	@param	underPoint	小数点以下桁数 (数値ではなく、文字列を出力する場合は -1) (省略時は3)
	 */
	constructor( title, id, unit = '', underPoint = 3 )
	{
		super( title, id, unit, '' );
		this.underPoint = underPoint;
	}

	/**
	 *	数値用の INPUT 要素を設定し、初期値を表示
	 *	@param	area		数値用の input 要素
	 */
	set valueElement( element )
	{
		super.valueElement = element;
		this.element.readOnly = true;
	}
}

let _anyCalculator_objs = {};	///< 計算機クラスのインスタンスの配列

/**
 *	計算機クラス
 */
class anyCalculator
{
	/**
	 *	初期画面を表示する
	 *	@param	id				計算機アプリのID
	 *	@param	inputs			入力項目クラスの配列
	 *	@param	outputs			出力項目クラスの配列
	 *	@param	calcCaption		計算ボタンのキャプション
	 *	@param	calcFunction	計算コールバック関数
	 *	@param	onError			入力エラーコールバック関数 (省略時: null)
	 *	@param	textSize		数値用テキストのサイズ (省略時: 4)
	 */
	constructor( id, inputs, outputs, calcCaption, calcFunction, onError = null, textSize = 4 )
	{
		this.id = id;
		this.inputs = inputs;
		this.outputs = outputs;
		this.calcCaption = calcCaption;
		this.calcFunction = calcFunction;
		this.onError = onError;
		this.textSize = textSize;

		var calcHTML = '';	//	計算機用のHTML

		//	計算機用のHTML作成
		this.inputs.forEach( ( item ) =>
		{
			var inputID = id + '_i_' + item.id;						//	入力項目ID
			var unit = ( item.unit === null ) ? '' : item.unit;		//	単位文字列
			calcHTML += '<tr>'
						+ '<th>' + item.title + '</th>'
						+ '<td><input type="text" id="' + inputID + '" size="' + textSize + '"> ' + unit + '</td>'
						+ '</tr>';
		} );

		calcHTML += '<tr>'
					+ '<td colspan="2" style="text-align: center; border: none;">'
					+ '<input type="button" onclick="anyCalculator.calc( ' + "'" + id + "'" + ' );" value="' + calcCaption + '">'
					+ '</td>'
					+ '</tr>';

		this.outputs.forEach( ( item ) =>
		{
			var inputID = id + '_o_' + item.id;						//	出力項目ID
			var unit = ( item.unit === null ) ? '' : item.unit;		//	単位文字列
			calcHTML += '<tr>'
						+ '<th>' + item.title + '</th>'
						+ '<td><input type="text" id="' + inputID + '" size="' + textSize + '"> ' + unit + '</td>'
						+ '</tr>';
		} );

		//	HTML表示
		document.getElementById( id ).innerHTML = calcHTML;

		//	入出力用 input 要素設定
		this.inputs.forEach( ( item ) =>
		{
			item.valueElement = document.getElementById( id + '_i_' + item.id );
		} );

		this.outputs.forEach( ( item ) =>
		{
			item.valueElement = document.getElementById( id + '_o_' + item.id );
		} );

		//	インスタンス登録
		anyCalculator._objs[ id ] = this;
	}

	/**
	 *	インスタンス配列を取得する
	 */
	static get _objs()
	{
		return ( _anyCalculator_objs );
	}

	/**
	 *	初期画面を表示する
	 *	@param	id			計算機アプリのID
	 */
	static calc( id )
	{
		var target = anyCalculator._objs[ id ];
		var inputs = {};
		var outputs = {};
		var itemError = null;

		//	入力値を取得
		target.inputs.forEach( ( item ) =>
		{
			inputs[ item.id ] = ( item.value.length > 0 ) ? Number( item.value ) : NaN;

			//	エラーチェック
			if ( isNaN( inputs[ item.id ] ) && !item.isOptional && itemError === null )
			{
				itemError = item;
			}
		} );

		//	出力用配列を作成
		target.outputs.forEach( ( item ) =>
		{
			outputs[ item.id ] = Number.NaN;
		} );

		//	 計算コールバック関数呼び出し
		if ( itemError === null )
		{
			target.calcFunction( inputs, outputs );
		}
		else
		{
			//	入力エラーあり
			if ( target.onError !== null )
			{
				return ( target.onError( itemError ) );
			}
		}

		//	出力
		target.outputs.forEach( ( item ) =>
		{
			if ( item.underPoint < 0 )
			{
				//	小数点以下桁数が負 ⇒ 出力は文字列
				item.value = outputs[ item.id ];
			}
			else
			{
				//	小数点以下桁数が 0 以上 ⇒ 出力は数値
				if ( isNaN( outputs[ item.id ] ) )
				{
					item.value = Number.NaN;
				}
				else
				{
					item.value = formatDecimal( outputs[ item.id ], item.underPoint );	// see formatDecimal.js
				}
			}
		} );
	}
}
