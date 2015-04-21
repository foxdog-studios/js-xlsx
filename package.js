'use strict';

Package.describe({
  summary: 'XLSX / XLSM / XLSB (Excel 2007+ Spreadsheet) / ODS parser and writer',
  version: '0.0.0',
  name: 'fds:js-xlsx'
});

Package.onUse(function (api) {
  api.addFiles('dist/jszip.js');
  api.addFiles('dist/xlsx.js');
  api.export(['jszip', 'XLSX']);
});


