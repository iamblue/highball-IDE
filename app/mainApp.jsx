import React from 'react';
import AppContainer from './containers/AppContainer';
import router from './routes/router';
import debug from './utils/debug';
import './styl/all.styl';

var dd = debug('mainApp');

window.location.hash = '/';

router.run(function (Handler) {
  // console.log(Handler)
  dd('router.run', Handler);
  React.render(<Handler />, document.getElementById('app'));
});
