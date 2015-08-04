import React, { Component } from 'react';
import App from './app';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import promiseMiddleware from './utils/promiseMiddleware';
// devTools
// import { devTools, persistState } from 'redux-devtools';

import debug from './utils/debug';
import './styl/all.styl';
import injectTapEventPlugin from 'react-tap-event-plugin';
import npm from 'npm';
import child_process from 'child_process';

var path = process.cwd() + '/tmp';

var dd = debug('mainApp');
injectTapEventPlugin();

window.location.hash = '/';

// 客戶端嚐試還原 state，如果有找到這個 elem 並且有內容，就代表為 isomorphic 版本
let state = null;
if( window.reduxState ){
  state = window.reduxState;
  // 用完就刪掉
  delete window.reduxState
}

// 就是 composeStores(), 將所有 stores 合併起來成為一個 composition(state, action) 指令
// 將來操作它就等於操作所有 reducers
const composedReducers = combineReducers(reducers);
// 加掛上 reudx-devtools
// buggy, disabled for now @Jul 28, 2015 16:54
/*var cs = compose(
  devTools(),
  // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore);

const finalCreateStore = applyMiddleware( promiseMiddleware )(cs);*/

// 由於要用 Promise middleware，因此改用 applyMiddleware()
const finalCreateStore = applyMiddleware( promiseMiddleware )(createStore);
let store = finalCreateStore(composedReducers, {
  currentView: 'editor',
  isLoading: false,
  loadingMsg: ''
});

// 基礎版 - 不需 promiseMiddleware 時，可用原本的 createStore() 來建立 store instance
// const store = createStore(composedReducers);

// isomorphic 應用時，標示這個 store 內 state 已還原
// 將阻止 routr 內另發一個請求去撈初始化資料
store.__restored__ = (state != null);

React.render(
  <App store={store} />,
  document.getElementById('app')
);
