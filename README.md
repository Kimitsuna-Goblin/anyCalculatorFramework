# なんでも計算フレームワーク - anyCalculatorFramework

ウェブブラウザ上で動く、シンプルな計算用アプリを簡単に作成できるフレームワークです。
<BR>
This is a framework that allows you to easily create simple calculation apps that run in a web browser.

## 説明 - Description

このフレームワークのパッケージはサンプルとフレームワーク本体であるライブラリから成り立ちます。
外部ライブラリ (例えば [jQuery](https://jquery.com/)) は特に必要ありませんが、もし、あなたが作るアプリに精密な計算精度を求めるなら [bignumber.js](https://mikemcl.github.io/bignumber.js/) などを使うと良いかも知れません。
<BR>
This framework package consists of samples and the library which is the body of the framework.
External libraries (e.g. [jQuery](https://jquery.com/)) are not particularly necessary,
but if you want to create a very precise calculation app, it may be a good idea to use the [bignumber.js](https://mikemcl.github.io/bignumber.js/) library with this.

### ファイル - Files

[lib](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/) - ライブラリ用のフォルダです。
<BR>
The folder for the library.
<BR>
<BR>
[lib/anyCalculatorFramework.js](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/anyCalculatorFramework.js) - ライブラリ本体のソースファイルです。
<BR>
The main source file of the library.
<BR>
<BR>
[lib/formatDecimal.js](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/formatDecimal.js) - 小数点以下の端数を四捨五入する関数のソースファイルです。
別リポジトリの [formatDecimal.js](https://github.com/Kimitsuna-Goblin/formatDecimal) と同じものです。なるべく最新のバージョンを使うことをお勧めします。
<BR>
The source file for a function to round off a fractional number of decimal points.
It is the same as [formatDecimal.js](https://github.com/Kimitsuna-Goblin/formatDecimal) in another repository.
It is recommended to use the latest version of this file.
<BR>
<BR>
[lib/MathWrapper.js](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/MathWrapper.js) - 標準 Math クラスのメソッドをラップさせた関数群のソースファイルです。計算を実装する際に、煩わしい「Math.」を書かなくても三角関数 (sin(), cos() 等) や対数関数 (log(), log10() 等) などを使うことができます。自然対数関数として ln() (Math.log() と同じ) を使うことができます。
<BR>
The source file for a group of functions that wrap the methods of the standard Math class.
When implementing a calculation, you can use trigonometric (sin(), cos(), etc.), logarithmic (log(), log10(), etc.) and any other functions without writing the annoying "Math.". As a natural logarithmic function, you can use ln() (the same as Math.log()).

### 機能 - Functions

このフレームワークを使えば、入力部、計算ボタン、出力部の3つのブロックから成るシンプルな計算アプリを簡単に作ることができます。
<BR>
With this framework, you can easily create a simple calculation app consisting of three blocks: an input section, a calculation button, and an output section.
<BR>
<BR>
小数を使った計算アプリを JavaScript で作る際には、通常は、計算誤差に特に注意する必要がありますが、ライブラリに同梱されている [formatDecimal.js](https://github.com/Kimitsuna-Goblin/formatDecimal) のおかげで、小数の計算誤差については、ほとんど気にする必要はありません。
<BR>
Normally, you need to pay special attention to calculation errors when building a JavaScript application using decimals,
but thanks to [formatDecimal.js](https://github.com/Kimitsuna-Goblin/formatDecimal), which is included in this library,
you don't have to worry about calculating decimals for the most part.
<BR>
<BR>
また、[MathWrapper.js](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/MathWrapper.js) のおかげで、
アプリで使用する計算式を直感的にシンプルに記述することができます。
<BR>
Also, thanks to [MathWrapper.js](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/MathWrapper.js),
the formulas used in your app are simple and intuitive to write.

## サンプル - Samples

サンプルでの計算結果は無保証です。
<BR>
Any of results of calculations with sample apps are not guaranteed.
<BR>
+ [sample1_four-operations.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample1_four-operations.html)
	- 2つの数値の四則演算
	- The four arithmetic operations with two numbers
+ [sample2_average.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample2_average.html)
	- 3つの数値の平均値、標準偏差
	- The means and the standard deviation of three numbers
+ [sample3_MathWrapper.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample3_MathWrapper.html)
	- Math クラスのラッパー関数の動作確認
	- Checking the operations of the Math class wrapper functions
+ [sample4_mouse-to-human.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample4_mouse-to-human.html)
	- マウスへの薬物投与量からのヒト等価用量計算
	- Calculation of the human equivalent doses from the doses to mice
+ [sample5_both-mouse-and-human.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample5_both-mouse-and-human.html)
	- マウス用量とヒト用量の相互換算
	- Interconversions of mouse and human doses
+ [sample6_CCr-eGFR.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample6_CCr-eGFR.html)
	- 腎機能の評価 (CCr と eGFR の計算)
	- Evaluations of the renal function (calculation of CCr and eGFR)
+ [sample7_child-dose.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample7_child-dose.html)
	- 小児薬用量計算
	- Pediatric dosage calculations
+ [sample8_Css-max.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample8_Css-max.html)
	- y定常状態の最高血中濃度計算
	- Calculation of the maximum concentration at steady-state of a drug
## 使用方法 - Usage

アプリを開発するには、サンプル ([sample1_four-operations.html](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/sample1_four-operations.html) など) を参考に、
計算アプリを表示するための HTML ファイルを作成して、lib フォルダの親フォルダに配置してください。
<BR>
<BR>
サンプルをもとにして、新しいアプリを開発する場合、あなたが必ずやるべきことは、次のことだけです。
<BR>
+ サンプルの HTML ファイルをコピーして、ファイル名を書き換える
+ ファイル先頭の著作権表示をあなたの名前に書き換える
+ <TITLE> タグのところに、アプリのタイトルを書く
+ init() 関数内の inputs 配列と outputs 配列に、計算に使う入出力項目の、
「項目名、ID、単位、初期値 (必要なら)、省略可否フラグ (必要なら)、小数点以下桁数 (必要なら)」をコメントの注意書きに従って、並べて書く
+ calc() 関数内に計算式を書く。このとき、入力項目は、たとえば inputs[ 'ID' ]、出力項目は outputs[ 'ID' ] のように書いてください
+ 動作確認をする

以上です！必要に応じて、画面デザインをいじるなどしてください。
慣れれば、あっという間にアプリを開発できるでしょう。

あなたのアプリを配布する場合は、著作権表示を書き換えるのを忘れないようにしてください。
<BR>
<BR>
To create your app, place your app's HTML file in the parent folder of the lib folder with reference to [sample1_four-operations.html](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/sample1_four-operations.html) and other samples.
<BR>
<BR>
When you are developing a new app based on a sample, the only thing you must do is:
<BR>
* Copy the sample HTML file and rename it.
* Replace the copyright notice at the beginning of the file with your name.
* Write the title of your app in the <TITLE> tag.
* At the init() function, put in the inputs and outputs arrays of the item name, ID, unit, initial value (if necessary), optional flag (if necessary), and the number of decimal places (if necessary) of the input and output items to be used in the calculation, along with the notes in the comments.
* Write the formula in the calc() function. write inputs[ 'ID' ] for input items and outputs[ 'ID' ] for output items, for example.
* Check if your app works well.
<BR>
That's all! If necessary, tweak the screen design and others.
Once you get used to it, you'll be able to develop your app in no time.
<BR>
<BR>
When you distribute your app, don't forget to rewrite the copyright notices.

## ライセンス - Licence

[MIT](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/LICENSE)

## 著作者 - Author

[Kimitsuna-Goblin](https://github.com/Kimitsuna-Goblin) (浦 公統; Ura Kimitsuna)
