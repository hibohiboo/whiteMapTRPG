const fs = require('fs');
const excel = require('exceljs');

(async _ =>{
  // コンテナ上のパスを記述
  const src = `/app/data/chart.xlsx`;
  const dest = `/app/dest/chart.pug`;

  // エクセルの内容を取得
  const sheets = await getSheets(src);

  // 書き出すファイルの内容
  let content = ``;

  // シート名を変数名、変数の値をレコードとして、pugファイルの内容を作成
  sheets.forEach(sheet=>{
    content += `- ${sheet.name}=${JSON.stringify(sheet.records)}\n`;
  });

  // ファイルに書き出し
  fs.writeFile(dest, content, (err)=>console.log(err));

  console.log(`Excel: ${src} to Pug: ${dest} `);
})();

/**
 * エクセルファイルを読み込み、シートごとのデータの配列を返す
 * @param {*} filepath 
 * @returns シートごとのデータの配列
 */
async function getSheets(filepath){
  const dataArr = [];
  const workbook = await readWorkbookAsync(filepath);
  workbook.eachSheet(function(worksheet, sheetId){
    const data = getSheetData(worksheet);
    dataArr.push(data);
  });
  return dataArr;
}

/**
 * シートのデータを取得
 * @param {*} sheet 
 * @returns {name:"シート名", records: [1行目をプロパティ名としたオブジェクトの配列]}
 */
function getSheetData(sheet){
  let columIndex=1;
  let rowIndex=1;
  const headerRow =[];

  // 1行目をヘッダとする
  while(sheet.getCell(1, columIndex).value !== null){
    headerRow.push(sheet.getCell(1, columIndex++).value);
  }

  const columnCount = headerRow.length;
  const dataArr = [];

  // 二行目からのデータを取り込み
  rowIndex++;
  while(sheet.getCell(rowIndex, 1).value !== null){
    const data ={};

    // ヘッダをプロパティ名として値を設定
    for(let col = 0; col < columnCount; col++){
      data[headerRow[col]] =sheet.getCell(rowIndex, col + 1).value;
    }

    dataArr.push(data);
    rowIndex++;
  }
  
  return {name: sheet.name, records: dataArr};
}

/**
 * エクセルファイルを非同期で読み込む
 * @param {*} filePath 
 */
function readWorkbookAsync(filePath){
  return new Promise((resolve, reject) => {
    const workbook = new excel.Workbook();
    workbook.xlsx.readFile(filePath).then(()=>{
      resolve(workbook);
    });
  });
}