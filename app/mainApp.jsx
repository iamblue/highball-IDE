import React from 'react';
import AppContainer from './containers/AppContainer';
import router from './routes/router';
import debug from './utils/debug';
import './styl/all.styl';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var npm = require('npm');
var child_process = require('child_process');
var path = process.cwd() + '/tmp';

var dd = debug('mainApp');

window.location.hash = '/';

router.run(function (Handler) {
  dd('router.run', Handler);
  React.render(<Handler />, document.getElementById('app'));
});
