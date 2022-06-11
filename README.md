# Startify

Startifyはウェブサイトを作成するために必要なリソースがひととおり揃った静的コーディングの開発環境です。デザインから静的コーディングまでシンプルなウェブページや、jQueryやVue.jsなどのJavaScriptライブラリやフレームワークを使ったウェブアプリケーション制作もワンストップで、タスクランナーのGulpを使って効率よく進めることができます。

現在、当リポジトリは更新を停止しています。以降のアップデートについては下記のリポジトリにて実施していますので、こちらからご利用ください。
- Pug + Sass + TypeScript + Vue.js + jQueryが利用可能なwebpackベースの開発環境[「Startify2」はこちらから](https://github.com/DesignSupply/startify2 "Startify2") 
- Pug + Sass + TypeScript + Reactが利用可能なwebpackベースの開発環境[「Startify3」はこちらから](https://github.com/DesignSupply/startify3 "Startify3") 

また、デザインガイドライン付きのテンプレートと、デザインガイドラインに対応した変数やmixinなどが用意されたSassファイルが揃ったライブラリ（SCSS、SASS記法に対応）の[「Startify-styles」](https://github.com/DesignSupply/startify-styles "Startify-styles")と併用していただくことで、デザイン制作からコーディングまでのスムーズなワークフローを実現できます。



## Features

Startifyで主にできることは以下になります。

* Gulpを使ったタスクの自動検知
* テンプレートエンジン（EJS、Pug）を使ったHTMLマークアップと自動整形
* テンプレートエンジン（EJS、Pug）内での外部JSONデータ読み込み
* Sass（SCSS記法・SASS記法）のコンパイル
* CSSLintでのCSSバリデーションチェック
* ESLintでのJavaScript（ECMAScript）バリデーションチェック
* Autoprefixerを使ったベンダープレフィックスの自動付与
* Browserifyを使った外部スクリプトの読み込み
* Babelを使ったJavaScript（ECMAScript）のトランスパイル
* webpack環境でのTypeScriptのコンパイル（本番環境用・開発環境用）
* jQueryライブラリの使用（ECMAScript・TypeScript）
* Vue.jsライブラリの使用（ECMAScript・TypeScript）
* ソースコードのマッピングファイルの生成
* CSS、JavaScriptファイルの自動minify化
* 開発用ローカルサーバーの起動とBrowsersyncでの自動リロード
* 各種画像ファイル（jpg、png、gif、svg）の圧縮



## Requirement

Node.js >= 12.18.3

npm >= 6.14.6

npx >= 6.14.6



## Installation

### Node.js環境のインストール（macOS）

#### 1. Homebrewのインストール
```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
#### 2. nodebrewのインストール・セットアップ
```bash
$ brew install nodebrew
$ nodebrew setup
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
$ source ~/.bash_profile
```
#### 3. Node.jsのインストール
```bash
$ nodebrew install-binary stable
```
#### 4. 各種パッケージのインストール
プロジェクトディレクトリにフォルダー内のファイル一式を入れて、package.jsonがあるディレクトリまで移動し、必要なパッケージをインストールします。
```bash
$ npm install
```



## Usage

### Gulpタスク実行

#### 1. タスク自動検知
```bash
$ npm run dev
```
#### 2. 開発用ローカルサーバー起動
```bash
$ npx gulp server
```
#### 3. EJSコンパイル
※ distディレクトリにHTMLファイルとして出力されます
```bash
$ npx gulp ejs
```
#### 4. Pugコンパイル
※ distディレクトリにHTMLファイルとして出力されます
```bash
$ npx gulp pug
```
#### 5. 外部スクリプト読み込み、JavaScriptトランスパイル（ECMAScript）
※ dist/assets/jsへ出力されます、マッピングファイルも自動的に生成されます
```bash
$ npx gulp es
```
#### 6. webpackでTypeScriptコンパイル
※ dist/assets/jsへ生成されます
```bash
$ npx gulp ts
```
#### 7. Sass（SCSS記法）コンパイル
※ dist/assets/cssへ出力されます、マッピングファイルも自動的に生成されます
```bash
$ npx gulp scss
```
#### 8. Sass（SASS記法）コンパイル
※ dist/assets/cssへ出力されます、マッピングファイルも自動的に生成されます
```bash
$ npx gulp sass
```
#### 9. 一括画像圧縮
※ 圧縮された画像ファイルはdist/assets/img/_minへ出力されます
```bash
$ npx gulp imagemin
```



## Note

* タイトル、ディスクリプション、OGPなどページ固有のmeta要素はEJSもしくはPugのソースファイルのディレクトリに含まれているJSONファイルで指定できます。
* 初期設定ではEJSおよびPugのHTMLファイル出力先が同じになりますので上書きにご注意ください。
* 初期設定ではJavaScript（ECMAScript）およびTypeScriptのコンパイル出力先が同じになりますので上書きにご注意ください。
* 初期設定ではSassのSCSS記法およびSASS記法のCSSファイル出力先が同じになりますので上書きにご注意ください。
* 初期設定では〜IE11などのレガシーブラウザではページ表示時にアラートで警告が出るようになっています。
* 初期設定では開発用ローカルサーバーのポート番号は2000となっています。



## Author

Ogawa Shinya

info@designsupply-web.com



## License

Startify is under [MIT license](https://en.wikipedia.org/wiki/MIT_License). 