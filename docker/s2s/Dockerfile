FROM node:9.5.0

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

# s2s
RUN npm i -D s2s
RUN npm i -D babel-plugin-s2s-action-builders
RUN npm i -D babel-plugin-s2s-axios-api
RUN npm i -D babel-plugin-s2s-axios-api-manager
RUN npm i -D babel-plugin-s2s-axios-api-root
RUN npm i -D babel-plugin-s2s-redux-actions
RUN npm i -D babel-plugin-s2s-redux-actions-manager
RUN npm i -D babel-plugin-s2s-redux-actions-reducers
RUN npm i -D babel-plugin-s2s-redux-actions-reducers-manager
RUN npm i -D babel-plugin-s2s-redux-actions-reducers-root
RUN npm i -D babel-plugin-s2s-redux-actions-root
RUN npm i -D babel-plugin-s2s-redux-sagas
RUN npm i -D babel-plugin-s2s-redux-sagas-manager
RUN npm i -D babel-plugin-s2s-redux-sagas-root
RUN npm i -D babel-plugin-syntax-object-rest-spread
RUN npm i -D react-scripts
RUN npm i -D s2s-handler-babel-object-rest-spread

# chokidarのポーリング設定
RUN sed -i -e "s/\(ignoreInitial: true\)/\1,\n    usePolling: true /g" /app/node_modules/s2s/lib/index.js
# 開始スクリプト
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"s2s\": \"s2s\",/g" /app/package.json
