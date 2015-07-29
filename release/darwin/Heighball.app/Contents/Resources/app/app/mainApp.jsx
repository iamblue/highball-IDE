import React from 'react';
import AppContainer from './containers/AppContainer';
import router from './routes/router';
import debug from './utils/debug';
import './styl/all.styl';
var npm = require('npm');
var child_process = require('child_process');
var path = process.cwd() + '/tmp';

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

var dd = debug('mainApp');

window.location.hash = '/';

router.run(function (Handler) {
  dd('router.run', Handler);
  React.render(<Handler />, document.getElementById('app'));
});
