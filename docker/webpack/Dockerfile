FROM node:9.5.0

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

# typescript
RUN npm i -D typescript

# tslint
RUN npm i -D tslint
RUN npm i -D tslint-config-airbnb

# typedoc
RUN npm i -D typedoc 

# ビルドツール
RUN npm i -D webpack

# 開発用サーバ
RUN npm i -D webpack-dev-server

# es6用トランスパイラ
RUN npm i -D babel-loader
RUN npm i -D babel-core
RUN npm i -D babel-cli
RUN npm i -D babel-preset-es2015
RUN npm i -D babel-preset-env
RUN npm i -D babel-plugin-transform-react-jsx
# async
RUN npm i -D babel-preset-es2017

# babelのreact用preset
RUN npm i -D babel-preset-react

# webpack用typescript loader
RUN npm i -D ts-loader

# jsViewライブラリreact
RUN npm i -S react
RUN npm i -S react-dom

# フレームワーク
RUN npm i -S redux
RUN npm i -S redux-actions
RUN npm i -S redux-saga
RUN npm i -S redux-logger

RUN npm i -S babel-polyfill

# バリデーション
RUN npm i -S redux-form
RUN npm i -S react-redux

# 国際対応
RUN npm i -S i18next

# ブラウザを識別して自動で国際対応
RUN npm i -S i18next-browser-languagedetector

# JSON-loader
RUN npm i -D json-loader
RUN npm i -D yaml-loader

# ライブラリ追加
RUN npm i -S lodash
RUN npm i -S eventemitter3
RUN npm i -S firebase

# ルーティング
RUN npm i -S react-router-redux@next
RUN npm i -S history
RUN npm i -S react-router-dom
RUN npm i -S react-router

RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"tslint\": \"tslint -p 'tsconfig.json'\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"tsc\": \"tsc -p tsconfig.json \",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"babel\": \"babel\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"typedoc\": \"typedoc\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"webpack\": \"webpack\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"dev-server\": \"webpack-dev-server\", /g" /app/package.json
