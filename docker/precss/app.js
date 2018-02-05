const fs = require('fs');
const postcss = require('postcss');
//const comment = require('postcss-comment'); // stylusでまかなう
//const nested = require('postcss-nested');   // エラーで落ちる
const autoprefixer = require('autoprefixer');
//const cssnext = require('postcss-cssnext'); //stylusがほとんどまかなう
const chokidar = require('chokidar');
//const target = 'src/app.pcss'
const stylus = require('stylus');

chokidar.watch('/app/src/*', {
  ignored: /(^|[\/\\])\../,
  persistent: true,
  // followSymlinks: false,
  // useFsEvents: false,
  usePolling: true
}).on('all', function(event, path) {
  console.log(event, path);
  transpile(path);
}).on('ready', function() {
  console.log('Ready');
}).on('error', error => log(`Watcher error: ${error}`))

/**
 * PostCssを使ってpcssをトランスパイルする。
 * 
 */
function transpile(target){
  console.log('target:' + target);

  // ファイルを読み込み
  fs.readFile(target, 'utf8', (err, str) => {
    if(str == null){
      console.log('file is null');
      return;
    }
    // まずはstylusでコンパイル
    stylus(str)
    .set('paths',['/app/src'])
    //.define('url', stylus.url({ paths: [__dirname + '/public'] }))
    .render( ( err, css)=>{
      if (err){ 
        //throw err;
        console.log(err.message);
        //process.stdout.write(err);
        return;
      };
      console.log('stylus ok');
      //console.log(css);
      // 次にpostcssでコンパイル
      postcss([
          // cssnext({
          //   features: {
          //     customProperties: false,
          //     rem: {html: false} // remを使用しようとするとエラーとなるのを防ぐ
          //   }
          // })
          autoprefixer
        ])
          .process(css, { from: target, to: 'dest/styles.css'/*, parser: comment */ })
          .then(result => {
              fs.writeFile('dest/styles.css', result.css, (err)=>console.log(err));
              if ( result.map ) fs.writeFile('dest/styles.css.map', result.map, (err)=>console.log(err));
          });
      });
    });

}
