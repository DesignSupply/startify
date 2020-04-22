# Startify

Startifyはウェブサイトを作成するために必要なリソースがひととおり揃った開発環境です。フロントエンドの技術を使って、デザインから静的コーディングまでシンプルなウェブページをワンストップで効率よく作成できます。



## Features

Startifyで主に出来ることは以下になります。

* Sketch、Adobe XD、Figmaに対応したテンプレートを使ったデザイン制作
* Gulpを使ったタスクの自動検知
* テンプレートエンジン（EJS、Pug）を使ったHTMLマークアップと自動整形
* テンプレートエンジン（EJS、Pug）内での外部JSONデータ読み込み
* Sass（SCSS）のコンパイル
* デザインテンプレートのフォーマットに合わせたSass変数およびmixinの使用
* Autoprefixerを使ったベンダープレフィックスの自動付与
* Browserifyを使った外部スクリプトの読み込み
* Babelを使ったJavaScript（ECMAScript）のトランスパイル
* webpack環境でのTypeScriptのコンパイル
* jQueryライブラリの使用（ECMAScript・TypeScript）
* ソースコードのマッピングファイルの生成
* CSS、JavaScriptファイルの自動minify化
* 開発用ローカルサーバーの起動とBrowsersyncでの自動リロード
* 各種画像ファイル（jpg、png、gif、svg）の圧縮



## Requirement

Sketch >= 52.4

Adobe XD >= 27.2.12.4

Node.js >= 12.9.0

npm >= 6.10.2

npx >= 6.10.2



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
※ distディレクトリにHTMLファイルとして生成されます
```bash
$ npx gulp ejs
```
#### 4. Pugコンパイル
※ distディレクトリにHTMLファイルとして生成されます
```bash
$ npx gulp pug
```
#### 5. 外部スクリプト読み込み、JavaScriptトランスパイル（ECMAScript）
※ dist/assets/jsへ生成されます、マッピングファイルも自動的に生成されます
```bash
$ npx gulp es
```
#### 6. webpackでTypeScriptコンパイル
※ dist/assets/jsへ生成されます
```bash
$ npx gulp ts
```
#### 7. Sassコンパイル
※ マッピングファイルも自動的に生成されます
```bash
$ npx gulp sass
```
#### 8. 一括画像圧縮
※ 圧縮された画像ファイルはdist/assets/img/_minに出力されます
```bash
$ npx gulp imagemin
```



## Note

* Sassファイルの変数はSketch、Adobe XD、Figmaの各テンプレートのデザインガイドに合わせています。
* Sassのファイルおよびディレクトリの構成はFLOCSSに基づいて設計しています。
* プロジェクト内で使用しているclass名はBEMの命名規則を緩やかに沿った設計になっています。
* タイトル、ディスクリプション、OGPなどページ固有のmeta要素はEJSもしくはPugのソースファイルのディレクトリに含まれているJSONファイルで指定できます。
* 初期設定ではEJSおよびPugのHTMLファイル出力先が同じになりますので上書きにご注意ください。
* 初期設定ではJavaScript（ECMAScript）およびTypeScriptのコンパイル出力先が同じになりますので上書きにご注意ください。
* 初期設定では〜IE11などのレガシーブラウザではページ表示時にアラートで警告が出るようになっています。



## Author

Ogawa Shinya

info@designsupply-web.com



## License

Startify is under [MIT license](https://en.wikipedia.org/wiki/MIT_License). 