# 白地図TRPG作成用環境

## ディレクトリ構成

```yaml
- app    # firebaseにアップロードするディレクトリ
- bin    # 各種shファイル
- data   # 表のデータ等を管理
- docker # 開発ツールをdockerで用意
- docs   # ドキュメント類
- htdocs
  - css  # cssの元となるstylusファイル
  - pug  # htmlの元となるpugファイル
```

## bash

```yaml
- bash.sh                           # dockerのコンテナにbashで接続する。 ex) bash.sh webpack
- container_build.sh                # dockerのコンテナを作成する
- firebase-bash.sh                  # 必要なポートを接続してfirebaseのdockerコンテナに接続する。
- firebase-deploy.sh                # appディレクトリの内容をfirebaseにデプロイする。
- firebase-login-token-generator.sh # firebaseのトークンを発行する。発行したトークンは.evnファイルに保存する必要がある。
- remove_all_container.sh           # dockerのコンテナを全て削除する。
- tslint.sh                         # tslintでスクリプトの文法チェックを行う。 --fix で修正できるところは修正する。
- typedoc.sh                        # api document を作成する。
- up.sh                             # 開発環境を起動する。pug, stylus, firebase, webpackが起動。各フォルダを監視し、変更があればファイルを出力する。
- webpack.sh                        # webpackを使ってファイルのトランスパイルを行う。
```