/*!
 *	Copyright (C) 2020 浦 公統
 *	Released under the MIT license.
 *	see https://opensource.org/licenses/MIT/
 */

/**
 *	@file		anyCalculatorFramework.js
 *	@brief		なんでも計算フレームワーク
 *	@remark		formatDecimal.js が必要
 *	@version	1.0.0
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
	 *	@param	isOmissible	省略可否フラグ (省略時は false)
	 */
	constructor( title, id, unit = '', initValue = null, isOmissible = false )
	{
		super( title, id, unit, initValue );
		this.isOmissible = isOmissible;
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
	 *	@param	underPoint	小数点以下桁数 (省略時は3)
	 */
	constructor( title, id, unit = '', underPoint = 3 )
	{
		super( title, id, unit, '' );
		this.underPoint = underPoint;
	}

	/**
	 *	数値用の INPUT 要素を設定し、初期値を表示
	 *	@param	area		数値用の INPUT 要素
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
	 *	@param	tableID			計算機表示用の TABLE タグの ID
	 *	@param	inputs			入力項目クラスの配列
	 *	@param	outputs			出力項目クラスの配列
	 *	@param	calcCaption		計算ボタンのキャプション
	 *	@param	calcFunction	計算コールバック関数
	 *	@param	onError			必須項目省略エラーコールバック関数 (省略時: null)
	 *	@param	textSize		数値用テキストのサイズ (省略時: 4)
	 */
	constructor( tableID, inputs, outputs, calcCaption, calcFunction, onError = null, textSize = 4 )
	{
		this.tableID = tableID;
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
			var inputID = tableID + '_i_' + item.id;				//	入力項目のID
			var unit = ( item.unit === null ) ? '' : item.unit;		//	単位文字列
			calcHTML += '<TR>'
						+ '<TH>' + item.title + '</TH>'
						+ '<TD><INPUT type="text" id="' + inputID + '" size="' + textSize + '"> ' + unit + '</TD>'
						+ '</TR>';
		} );

		calcHTML += '<TR>'
					+ '<TD colspan="2" style="text-align: center; border: none;">'
					+ '<INPUT type="button" onclick="anyCalculator.calc( ' + "'" + tableID + "'" + ' );" value="' + calcCaption + '">'
					+ '</TD>'
					+ '</TR>';

		this.outputs.forEach( ( item ) =>
		{
			var inputID = tableID + '_o_' + item.id;				//	出力項目のID
			var unit = ( item.unit === null ) ? '' : item.unit;		//	単位文字列
			calcHTML += '<TR>'
						+ '<TH>' + item.title + '</TH>'
						+ '<TD><INPUT type="text" id="' + inputID + '" size="' + textSize + '"> ' + unit + '</TD>'
						+ '</TR>';
		} );

		//	HTML表示
		document.getElementById( tableID ).innerHTML = calcHTML;

		//	入出力用 INPUT 要素設定
		this.inputs.forEach( ( item ) =>
		{
			item.valueElement = document.getElementById( tableID + '_i_' + item.id );
		} );

		this.outputs.forEach( ( item ) =>
		{
			item.valueElement = document.getElementById( tableID + '_o_' + item.id );
		} );

		//	インスタンス登録
		anyCalculator._objs[ tableID ] = this;
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
	 *	@param	tableID			計算機表示用の TABLE タグの ID
	 */
	static calc( tableID )
	{
		var target = anyCalculator._objs[ tableID ];
		var inputs = {};
		var outputs = {};
		var itemOmitted = null;

		//	入力値を取得
		target.inputs.forEach( ( item ) =>
		{
			inputs[ item.id ] = ( item.value.length > 0 ) ? Number( item.value ) : NaN;

			if ( isNaN( inputs[ item.id ] ) && !item.isOmissible && itemOmitted === null )
			{
				itemOmitted = item;
			}
		} );

		//	出力用配列を作成
		target.outputs.forEach( ( item ) =>
		{
			outputs[ item.id ] = Number.NaN;
		} );

		//	 計算コールバック関数呼び出し
		if ( itemOmitted === null )
		{
			target.calcFunction( inputs, outputs );
		}
		else
		{
			//	必須項目省略エラー
			if ( target.onError !== null )
			{
				return ( target.onError( itemOmitted ) );
			}
		}

		//	出力
		target.outputs.forEach( ( item ) =>
		{
			if ( isNaN( outputs[ item.id ] ) )
			{
				item.value = Number.NaN;
			}
			else
			{
				item.value = formatDecimal( outputs[ item.id ], item.underPoint );	// see formatDecimal.js
			}
		} );
	}
}
