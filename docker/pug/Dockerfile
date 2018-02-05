FROM node:9.5

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

RUN npm i -D pug

RUN npm i -D pug-cli

RUN npm i -D chokidar

RUN npm i -D chokidar-cli

RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"pug\": \"pug -o \/app\/dist -P \",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"build-pug\": \"pug -o \/app\/dist -P \/app\/src\/*.pug \",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"watch\": \"chokidar '\/app\/src\/*.pug' -p -c 'npm run build-pug' \",/g" /app/package.json
