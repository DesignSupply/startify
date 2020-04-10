# Startify

Startifyはウェブサイトを作成するために必要なリソースがひととおり揃った開発環境です。デザインから静的コーディングまでシンプルなウェブページをワンストップで効率よく作成できます。

## Features

Startifyで主に出来ることは以下になります。

* Sketch、Adobe XD、Figmaに対応したデザインテンプレート
* Gulpを使ったタスクの自動検知
* テンプレートエンジン（EJS、Pug）を使ったHTMLマークアップ
* テンプレートエンジン（EJS、Pug）内での外部JSONデータ読み込み
* Sass（SCSS）のコンパイル
* Autoprefixerによるベンダープレフィックスの自動付与
* Browserifyで外部スクリプトの読み込み
* Babelを使ったJavaScriptのトランスパイル
* ソースコードのマッピングファイルの生成
* CSS、JavaScriptファイルのminify化
* 開発用ローカルサーバーの起動とBrowsersyncでの自動リロード
* 各種画像ファイル（Jpg、png、gif、svg）の圧縮

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
プロジェクトディレクトリにdevelopフォルダー内のファイル一式を移動し、必要なパッケージをインストールします。
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
※distフォルダー内にHTMLファイルとして生成されます
```bash
$ npx gulp ejs
```
#### 4. Pugコンパイル
※distフォルダー内にHTMLファイルとして生成されます
```bash
$ npx gulp pug
```
#### 5. 外部スクリプト読み込み、JavaScriptトランスパイル（ECMAScript）
※マッピングファイルも自動的に生成されます
```bash
$ npx gulp es
```
#### 6. Sassコンパイル
※マッピングファイルも自動的に生成されます
```bash
$ npx gulp sass
```
#### 7. 一括画像圧縮
※画像圧縮時にはdist/assets/img/_minディレクトリに出力されます
```bash
$ npx gulp imagemin
```

## Note

* Sassのファイルおよびディレクトリの構成はFLOCSSに基づいて設計しています。
* プロジェクト内で使用しているclass名はBEMの命名規則を参考に設計しています。
* タイトル、ディスクリプション、OGPなどページ固有のmeta要素はEJSもしくはPugのソースファイルに含まれているJSONファイルで指定できます。
* 初期設定ではEJSおよびPugのHTMLファイル出力先が同じになりますので上書きにご注意ください。

## Author

Ogawa Shinya
info@designsupply-web.com

## License

Startify is under [MIT license](https://en.wikipedia.org/wiki/MIT_License). 