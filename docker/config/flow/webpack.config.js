const webpack = require('webpack') ;
// 環境変数から本番環境を判断。
const isProduction = process.env.NODE_ENV === 'production';

// source-map : 正確・最小限。コンパイル速度低
// eval-source-map: 正確。コンパイル速度低。再作成速度中。
const devtool = isProduction ? 'source-map' : 'eval-source-map';

// productionの場合
const plugins = isProduction ? 
[
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
    },
  }),
  // code-splittingを有効にするプラグイン
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "vendor.js",
    minChunks: Infinity,}),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
  // minimize
  new webpack.optimize.UglifyJsPlugin()
] :
  // 開発用設定。
[
    // hot loadを有効にするためのプラグイン
    new webpack.HotModuleReplacementPlugin(),
];

module.exports = {
  // src以下のソースをビルド対象とする
  context: __dirname + '/src',
  entry: {
    characterForm: './index.js',
    // code-splitting用の設定
    vendor: ['react', 'react-dom', 'redux', 'redux-thunk', 
             'react-redux', 'redux-form', 'i18next', 'firebase', 'react-router-redux',
              'history', 'react-router-dom']
  },
  output: {
    path: '/app/dist',
		filename: "[name].js",
  },

  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  performance: {
    hints:false
  },
  // プラグイン設定
  plugins,
  // source-mapを出力して、ブラウザの開発者ツールからデバッグできるようにする。
  devtool,
  devServer: {
    // public/index.htmlをデフォルトのホームとする
    contentBase: './public',
    // バンドルしたファイルを/assets/js/フォルダに出力したものとする。
    publicPath: "/assets/js/",
    // インラインモード
    inline: true,
    // 8080番ポートで起動
    port: 8080,
    // dockerのコンテナ上でサーバを動かすときは以下の設定で全ての接続を受け入れる
    host:"0.0.0.0",
    // hot loadを有効にする
    hot: true,
    // ログレベルをinfoに
    clientLogLevel: "info",
  },
  // vagrantの仕様でポーリングしないとファイルの変更を感知できない
  watchOptions: {
    aggregateTimeout: 300,
    // ５秒毎にポーリング
    poll: 5000
  }
};