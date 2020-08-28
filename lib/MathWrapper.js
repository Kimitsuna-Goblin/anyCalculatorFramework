/*!
 *	Copyright (C) 2020 浦 公統
 *	Released under the MIT license.
 *	see https://opensource.org/licenses/MIT/
 */

/**
 *	@file		MathWrapper.js
 *	@brief		計算式の記述を簡単にするための Math クラスラッパー
 *	@version	1.0.0
 *	@remark		Math.E (自然対数の底) はあえてラップしていません。必要なら Math.E を使用してください。
 *				また、 Math.round() は計算誤差を生じることがあるのでラップしていません。
 *				小数点以下を四捨五入するには bignumber.js や formatDecimal.js を使用してください。
 */

const PI = Math.PI;				///< 円周率 π

const LN2 = Math.LN2;			///< 2 の自然対数値 (約 0.693)
const LN10 = Math.LN10;			///< 10 の自然対数値 (約 2.303)
const LN2E = Math.LN2E;			///< 2 の自然対数値の逆数 (約 1.443)
const LN10E = Math.LN10E;		///< 10 の自然対数値の逆数 (約 0.434)

const SQRT1_2 = Math.SQRT1_2;	///< 1/2 の平方根
const SQRT2 = Math.SQRT2;		///< 2 の平方根

/**
 *	絶対値計算
 *	@param	x	数値
 *	@return	x の絶対値
 */
function abs( x )
{
	return ( Math.abs( x ) );
}

/**
 *	最大値取得
 *	@param	val1, val2, ...		数値の列
 *	@return	数値の最大値。引数に NaN があれば NaN を返す。
 */
function max( ...vals )
{
	return ( Math.max( ...vals ) );
}

/**
 *	最小値取得
 *	@param	val1, val2, ...		数値の列
 *	@return	数値の最小値。引数に NaN があれば NaN を返す。
 */
function min( ...vals )
{
	return ( Math.min( ...vals ) );
}

/**
 *	sin 計算
 *	@param	x	数値
 *	@return	sin( x ) の値
 */
function sin( x )
{
	return ( Math.sin( x ) );
}

/**
 *	cos 計算
 *	@param	x	数値
 *	@return	cos( x ) の値
 */
function cos( x )
{
	return ( Math.cos( x ) );
}

/**
 *	tan 計算
 *	@param	x	数値
 *	@return	tan( x ) の値
 */
function tan( x )
{
	return ( Math.tan( x ) );
}

/**
 *	arcsin 計算
 *	@param	x	数値
 *	@return	arcsin( x ) の値
 */
function asin( x )
{
	return ( Math.asin( x ) );
}

/**
 *	arccos 計算
 *	@param	x	数値
 *	@return	arccos( x ) の値
 */
function acos( x )
{
	return ( Math.acos( x ) );
}

/**
 *	arctan 計算
 *	@param	x	数値
 *	@return	arctan( x ) の値
 */
function atan( x )
{
	return ( Math.atan( x ) );
}

/**
 *	arctan 計算
 *	@param	y	Y成分 (縦) の値
 *	@param	x	X成分 (横) の値
 *	@return	引数で指定された縦横比率に対する arctan の値
 */
function atan2( y, x )
{
	return ( Math.atan2( y, x ) );
}

/**
 *	sinh 計算
 *	@param	x	数値
 *	@return	sinh( x ) の値
 */
function sinh( x )
{
	return ( Math.sinh( x ) );
}

/**
 *	cosh 計算
 *	@param	x	数値
 *	@return	cosh( x ) の値
 */
function cosh( x )
{
	return ( Math.cosh( x ) );
}

/**
 *	tanh 計算
 *	@param	x	数値
 *	@return	tanh( x ) の値
 */
function tanh( x )
{
	return ( Math.tan( x ) );
}

/**
 *	小数点以下切り上げ計算
 *	@param	x	数値
 *	@return	x 以上の最小の整数
 *	@remark	この関数を ceil( x - 0.5 ) のようにして、四捨五入等の目的で使ってはならない。
 */
function ceil( x )
{
	return ( Math.ceil( x ) );
}

/**
 *	小数点以下切り下げ計算
 *	@param	x	数値
 *	@return	x 以下の最大の整数
 *	@remark	この関数を floor( x + 0.5 ) のようにして、四捨五入等の目的で使ってはならない。
 */
function floor( x )
{
	return ( Math.floor( x ) );
}

/**
 *	小数点以下削除
 *	@param	x	数値
 *	@return	x の小数点以下を削除した整数部分
 *	@remark	この関数を四捨五入等の目的で使ってはならない。
 */
function trunc( x )
{
	return ( Math.trunc( x ) );
}

/**
 *	平方根計算
 *	@param	x	数値
 *	@return	x の平方根
 */
function sqrt( x )
{
	return ( Math.sqrt( x ) );
}

/**
 *	立方根計算
 *	@param	x	数値
 *	@return	x の立方根 (1/3乗)
 */
function cbrt( x )
{
	return ( Math.cbrt( x ) );
}

/**
 *	二乗和平方根計算
 *	@param	val1, val2, ...		数値の列
 *	@return	与えられた各数値の二乗和の平方根
 */
function hypot( ...vals )
{
	return ( Math.hypot( ...vals ) );
}

/**
 *	累乗計算
 *	@param	x	数値
 *	@return	x の n 乗
 *	@remark	関数を使わず、( x ) ** ( n ) としても同じ。
 */
function pow( x, n )
{
	return ( Math.pow( x, n ) );
}

/**
 *	eの累乗計算
 *	@param	x	数値
 *	@return	自然対数の底 e の x 乗
 */
function exp( x )
{
	return ( Math.exp( x ) );
}

/**
 *	自然対数計算
 *	@param	x	数値
 *	@return	x の自然対数
 */
function log( x )
{
	return ( Math.log( x ) );
}

/**
 *	自然対数計算
 *	@param	x	数値
 *	@return	x の自然対数
 */
function ln( x )
{
	return ( Math.log( x ) );
}

/**
 *	常用対数計算
 *	@param	x	数値
 *	@return	x の常用対数
 */
function log10( x )
{
	return ( Math.log10( x ) );
}

/**
 *	log 2 計算
 *	@param	x	数値
 *	@return	2 を底とする x の対数値
 */
function log2( x )
{
	return ( Math.log2( x ) );
}
