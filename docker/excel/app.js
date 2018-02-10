const fs = require('fs');
const excel = require('exceljs');

(async _ =>{
  const data = await readXlsxDataAsync(`/app/data/chart.xlsx`, true);
  console.log(data)
  fs.writeFile('/app/dest/chart.pug', JSON.stringify(data), (err)=>console.log(err));
})();

function readXlsxDataAsync(filePath, columnsFromHeader){
  return new Promise((resolve, reject) => {
    return readXlsxData(resolve, reject, filePath, columnsFromHeader);
  });
}

function readXlsxData (resolve, reject, filePath, columnsFromHeader){
  const dataArr =[];
  const workbook = new excel.Workbook();
  workbook.xlsx.readFile(filePath).then(()=>{
    //最初のsheetを読み込んでいる
    const sheet = workbook.getWorksheet('classList');
    if(sheet == null){
      console.log('sheet cant read')
      return ;
    }
    console.log(sheet);
    let columIndex=1;
    let rowIndex=1;
    if(columnsFromHeader){
      const headerRow =[];
      while(sheet.getCell(1, columIndex).value !== null){
        headerRow.push(sheet.getCell(1, columIndex++).value);
      }
      columIndex--;
      rowIndex++;
      while(sheet.getCell(rowIndex, 1).value !== null){
        const data ={};
        let col=1;
        while(col<=columIndex){
          data[headerRow[col-1]] =sheet.getCell(rowIndex, col++).value;
        }
        dataArr.push(data);
        rowIndex++;
      }
    }else{
      while(sheet.getCell(rowIndex, 1).value !== null){
        const data =[];
        while(sheet.getCell(rowIndex, columIndex).value !== null){
          data.push(sheet.getCell(rowIndex, columIndex++).value);
        }
        dataArr.push(data);
        columIndex=1;
        rowIndex++;
      }
    }
    resolve(dataArr);
  });
};