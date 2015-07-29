// 燒 cpp.hex 檔案進去 arduino or other MCUs
// var npm = require('npm');
// var child_process = require('child_proccess');
// ok 可以 work
// child_process.exec('tar -cvf ./node_modules.tar ./node_modules', function(err, stdout, stderr) {
//   console.log(err);
//   console.log(stdout);
//   console.log(stderr)
// });

// //讓 npm 在某一 folder 安裝東西

// npm.load({ prefix: path },function(error) {
//   console.log('~~~~~~~~~~~~~~~')
//   if (error) { return console.log(error); }
//   console.log(path);

//   npm.commands.install(['module'], function(error, data) {
//     console.log(error || data);
//   });
//   console.log('~~~~~~~~~~~~~~~')
// });
var Avrgirl = require('avrgirl-arduino');

var BurnActions = {
  _board: 'uno',

  _cppUrl: './',

  init: function(board, cppUrl){
    this._board = board;
    this._cppUrl = cppUrl;
  },

  start: function(debug){
    var avrgirl = new Avrgirl({
      board: this._board,
      debug: debug
    });

    avrgirl.flash(this._cppUrl, function (error) {
      if (error) {
        console.error(error);
      } else {
        console.info('done.');
      }
    });
  }
};

export default BurnActions;
