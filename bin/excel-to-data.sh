#!/bin/bash

# このシェルスクリプトのディレクトリの絶対パスを取得。
bin_dir=$(cd $(dirname $0) && pwd)

cd $bin_dir/../docker && docker-compose run excel /bin/bash -c "node app.js"