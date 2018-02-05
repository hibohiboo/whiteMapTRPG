FROM node:6.12.3

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

# firebase
RUN npm install -g firebase-tools
RUN npm i -D firebase-tools

RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"firebase\": \"firebase\", /g" /app/package.json