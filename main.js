var app = require('app');
var BrowserWindow = require('browser-window');
var npm = require('npm');
var dialog = require('dialog');
var ipc = require('ipc');
// var folderTree = require('./app/utils/folderTree');
// 秀出 tmp folder 的 tree
// console.log(folderTree('tmp', false, null))

require('electron-debug')();
require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 728,
    resizable: true,
    frame: false, // 無邊框視窗
  })

  if (process.env.HOT) {
    mainWindow.loadUrl('file://' + __dirname + '/app/hot-dev-app.html')
  } else {
    mainWindow.loadUrl('file://' + __dirname + '/app/app.html')
  }

  mainWindow.on('closed', function() {
    mainWindow = null
  });

  // ipc.on('application:open-file', ()=>{
  //   dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]})
  // });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools()
  }

});
