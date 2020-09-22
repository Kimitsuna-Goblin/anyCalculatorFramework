# なんでも計算フレームワーク - anyCalculatorFramework

ウェブブラウザ上で動く、シンプルな計算用アプリを簡単に作成できるフレームワークです。
<BR>
This is a framework that allows you to easily create simple calculation apps that run in a web browser.

## 説明 - Description

このフレームワークのパッケージはサンプルとフレームワーク本体であるライブラリから成り立ちます。
外部ライブラリ (例えば [jQuery](https://jquery.com/)) は特に必要ありません。
小数点以下の四捨五入も誤差なしに計算できます。
だだ、もし、より精密な計算精度を求めるなら [bignumber.js](https://mikemcl.github.io/bignumber.js/) などを使うと良いかも知れません。
<BR>
This framework package consists of samples and the library which is the body of the framework.
External libraries (e.g. [jQuery](https://jquery.com/)) are not particularly necessary.
You can calculate without rounding off error.
However if you want to create a very very very precise calculation app, it may be a good idea to use the [bignumber.js](https://mikemcl.github.io/bignumber.js/) library with this.

### ファイル - Files

[lib](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/) - ライブラリ用のフォルダです。
<BR>
The folder for the library.

[lib/anyCalculatorFramework.js](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/anyCalculatorFramework.js) - ライブラリ本体のソースファイルです。
<BR>
The main source file of the library.

[lib/formatDecimal.js](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/formatDecimal.js) - 小数点以下を四捨五入する関数のソースファイルです。
別リポジトリの [formatDecimal.js](https://github.com/Kimitsuna-Goblin/formatDecimal) と同じものです。なるべく最新のバージョンを使うことをお勧めします。
<BR>
The source file for a function to round off a decimal number.
It is the same as [formatDecimal.js](https://github.com/Kimitsuna-Goblin/formatDecimal) in another repository.
It is recommended to use the latest version of this file.

[lib/MathWrapper.js](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/MathWrapper.js) - 標準 Math クラスのメソッドをラップさせた関数群のソースファイルです。計算を実装する際に、煩わしい「Math.」を書かなくても三角関数 (sin(), cos() 等) や対数関数 (log(), log10() 等) などを使うことができます。自然対数関数として ln() (Math.log() と同じ) を使うことができます。
<BR>
The source file for a group of functions that wrap the methods of the standard Math class.
When implementing a calculation, you can use trigonometric (sin(), cos(), etc.), logarithmic (log(), log10(), etc.) and any other functions without writing the annoying "Math.". As a natural logarithmic function, you can use ln() (the same as Math.log()).

### 機能 - Functions

このフレームワークを使えば、入力部、計算ボタン、出力部の3つのブロックから成るシンプルな計算アプリを簡単に作ることができます。
<BR>
With this framework, you can easily create a simple calculation app consisting of three blocks: an input section, a calculation button, and an output section.

小数を使った計算アプリを JavaScript で作る際には、通常は、計算誤差に特に注意する必要がありますが、ライブラリに同梱されている [formatDecimal.js](https://github.com/Kimitsuna-Goblin/formatDecimal) のおかげで、小数の計算誤差については、ほとんど気にする必要はありません。
<BR>
Normally, you need to pay special attention to calculation errors when building a JavaScript application using decimals,
but thanks to [formatDecimal.js](https://github.com/Kimitsuna-Goblin/formatDecimal), which is included in this library,
you don't have to worry about calculating decimals for the most part.

また、[MathWrapper.js](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/MathWrapper.js) のおかげで、
アプリで使用する計算式を直感的にシンプルに記述することができます。
<BR>
Also, thanks to [MathWrapper.js](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/lib/MathWrapper.js),
the formulas used in your app are simple and intuitive to write.

## サンプル - Samples

サンプルでの計算結果は無保証です。
<BR>
Any of results of calculations with sample apps are not guaranteed.

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
	- 入力項目に単位と初期値を与えているサンプル
	- Calculation of the human equivalent doses from the doses to mice
	- Units and default values are given for the input items
+ [sample5_both-mouse-and-human.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample5_both-mouse-and-human.html)
	- マウス用量とヒト用量の相互換算
	- 1画面に2つの計算機を表示するサンプル
	- Interconversions of mouse and human doses
	- 2 calculators in a screen
+ [sample6_CCr-eGFR.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample6_CCr-eGFR.html)
	- 腎機能の評価 (CCr と eGFR の計算)
	- 省略可能な入力項目を含むサンプル
	- Evaluations of the renal function (calculation of CCr and eGFR)
	- An optional input item is included
+ [sample7_child-dose.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample7_child-dose.html)
	- 小児薬用量計算
	- 1画面に2つの計算機を表示するサンプル
	- Pediatric dosage calculations
	- 2 calculators in a screen
+ [sample8_Css-max.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample8_Css-max.html)
	- 薬物の定常状態の最高血中濃度計算
	- Calculation of the maximum concentration at steady-state of a drug
+ [sample9_BMI.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample9_BMI.html)
	- BMI計算
	- Calculation of the Body Mass Index (BMI)

## 計算機アプリ開発方法 - How to create a calculator app

計算機アプリを開発するには、サンプル ([sample1_four-operations.html](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/sample1_four-operations.html) など) を参考に、
計算機アプリ用の HTML ファイルを作成して、lib フォルダの親フォルダに配置してください。
<BR>
To create a new calculator app, place your app's HTML file in the parent folder of the lib folder with reference to [sample1_four-operations.html](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/sample1_four-operations.html) and other samples.

サンプルをもとにして、新しいアプリを開発する場合、あなたが最低限やるべきことは、次のことだけです。
When you are developing a new app based on a sample, all you have to do, at a minimum, is:

+ サンプルの HTML ファイルを同じフォルダにコピーして、ファイル名を書き換える
	- Copy a sample HTML file to the same folder and rename it.
+ ファイル先頭の著作権表示をあなたの名前に書き換える
	- Replace the copyright notice at the beginning of the file with your name.
+ &lt;TITLE&gt; タグのところに、アプリのタイトルを書く
	- Write the title of your app in the &lt;TITLE&gt; tag.
+ init() 関数内の inputs 配列と outputs 配列に、計算に使う入出力項目の 項目名、項目ID、単位などをコメントの注意書きに従って書く
	- At the init() function, put in the inputs and outputs arrays of the item name, item ID, unit, etc., according to the comments in the sample source.
+ calc() 関数内に計算式を書く。入力項目は inputs[ '<I>入力項目ID</I>' ]、出力項目は outputs[ '<I>出力項目ID</I>' ] のように書いてください
	- Write the formula in the calc() function. write inputs[ '<I>input item ID</I>' ] for input items and outputs[ '<I>output item ID</I>' ] for output items.
+ 動作確認をする
	- Check if your app works well.

以上です！必要に応じて、画面デザインをいじるなどしてください。
慣れれば、あっという間にアプリを開発できるでしょう。
<BR>
That's all! If necessary, tweak the screen design and others.
Once you get used to it, you'll be able to develop your app in no time.

あなたのアプリを配布する場合は、著作権表示を書き換えるのを忘れないようにしてください。
また、配布の際、lib フォルダを同梱するのを忘れないでください。アプリを動かすためには lib フォルダが必要です。
<BR>
When you distribute your app, don't forget to rewrite the copyright notices.
Also, don't forget to include the lib folder with your distributing app. You need the lib folder to run your app.

## より詳しいコーディング方法 - More detail how to code

コードは HTML ファイル上に JavaScript で記述します。
実際のコーディングはサンプル
 ([sample1_four-operations.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample1_four-operations.html) など)
を参照してください。
<BR>
You should write code in JavaScript on a HTML file.
You can see coding samples at
[sample1_four-operations.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample1_four-operations.html) and so on.

まず、初期化関数 init() において、次の順番にコーディングします。
<BR>
First, at the initialize function (init()), code in the following order.

1. 入力項目設定 - Defining of input items

	例 (Ex.): new itemInput( 'マウス体重(Weight of Mouse)', 'mouseWeight', 'g', 19.0, false ),

	+ 引数は 項目名, 入力項目ID, 単位 (省略時は空), 初期値 (省略時は空), 省略可否フラグ (省略時は false) です。	
	+ Arguments are item title, input item ID, unit (default:blank), default value (default:blank) and optional item flag (default:false).

2. 出力項目設定 - Defining of output items

	例 (Ex.): new itemOutput( 'ヒト用量(Dosage for Human)', 'humanDosage', 'mg/kg', 3 ),

	+ 引数は 項目名, 出力項目ID, 単位 (省略時は空), 小数点以下桁数 (数値ではなく、文字列を出力する場合は -1) (省略時は 3) です。	
	+ Arguments are item title, output item ID, unit (default:blank) and number of decimal places (-1 for string output, default:3).

3. 計算機アプリのインスタンス生成 - Create an instance of the calculator app

	例 (Ex.): new anyCalculator( 'mouseToHuman', inputs, outputs, 'ヒト用量計算(Calculate Human Dosage)', calcHumanDosage, onError, 4 );

	+ 引数は 計算機アプリのID, 入力項目, 出力項目, 計算ボタンのキャプション, 計算コールバック関数, 入力エラーコールバック関数, テキストサイズ (省略時は4) です。	
	+ Arguments are calculator app ID, input items, output items, button caption for calculation, calculation callback function, error callback function and text field size (default:4).

計算機アプリのインスタンスが生成されると、画面上に計算機アプリが表示されます。
表示されない場合は、コーディングに間違いがないか確認してください。
<BR>
When an instance of the calculator app is created, the calculator app will appear on the screen.
If not appear, look for mistakes in the source code.

1つの画面に複数の計算機アプリを表示する場合は、計算機アプリごとに上記のコーディングをします。
<BR>
If you want to display multiple calculator apps on one screen, write codes for each calculator app as above.

次に、計算コールバック関数に、実際の計算をコーディングします。
input[ '<I>入力項目ID</I>' ] に入力数値が入っています。
計算結果を output[ '<I>出力項目ID</I>' ] に入れて、関数を終了してください。
関数の戻り値は不要です。
<BR>
Next, write code to do the actual calculation into the calculation callback function.
Each input number has been set to input[ '<I>input item ID</I>' ].
Set each result of calculation to output[ '<I>outpue item ID</I>' ], and finish the function.
No function return value is required.

	例 (Ex.): outputs[ 'humanDosage' ] = inputs[ 'mouseDosage' ] * pow( inputs[ 'mouseWeight' ] / 1000.0 / inputs[ 'humanWeight' ], 1 / 3 );

入力項目が空欄だったり、数値以外が入力された場合は、通常はエラーになり、入力エラーコールバック関数が呼び出されます。
その場合、計算コールバック関数は呼び出されません。
ただし、エラーにしないで、計算コールバック関数を呼び出すようにもできます。
その場合、空欄や数値以外が入力された項目には NaN が入ります。
エラーにしないサンプルは [sample6_CCr-eGFR.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample6_CCr-eGFR.html) を参照してください。
<BR>
If an input item is left blank or a non-numeric value is entered, an error is usually encountered and the error callback function is called.
In this case, the calculation callback function will not be called.
However, it is possible to call a calculation callback function without making it an error.
In that case, NaN will be entered in the blank or non-numeric item.
See [sample6_CCr-eGFR.html](https://kimitsuna-goblin.github.io/anyCalculatorFramework/sample6_CCr-eGFR.html) for a sample that does not make an error.

入力エラーがあったときに、何か特別な処理をしたい場合は、
入力エラーコールバック関数 (onError()) のコードを書き換えてください。
<BR>
If you want to do something special when there is an input error,
rewrite the code of the error callback function (onError()).

最後に、計算機アプリを表示する部分の HTML を確認し、必要に応じて書き換えます。
計算機アプリは <table id="<I>計算機アプリのID</I>"></table> と書かれた部分に表示されます。
<BR>
Finally, please check the HTML for the part that displays the calculator app and rewrite it if necessary.
The calculator app is displayed in the part written <table id="<I>calculator app ID</I>"></table>.


特に、1つの画面に複数の計算機アプリを表示する場合は、計算機アプリのIDを間違えないようにしてください。
<BR>
In particular, when displaying multiple computer applications on the same screen,
please make sure not to mistake the IDs of the calculator apps.

## ライセンス - Licence

[MIT](https://github.com/Kimitsuna-Goblin/anyCalculatorFramework/blob/master/LICENSE)

## 著作者 - Author

[Kimitsuna-Goblin](https://github.com/Kimitsuna-Goblin) (浦 公統; Ura Kimitsuna)
