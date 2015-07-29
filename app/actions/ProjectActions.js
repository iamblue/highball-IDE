// User 在編輯 project 的基本操作
var React = require('react');
var remote = require('remote');
var dialog = remote.require('dialog');
var folderTree = require('../utils/folderTree');
var mkdirp = require('mkdirp');
var fs = require('fs-extra');
var ProjectActions = {
  // 開啟專案
  open: function(callback) {
    return dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory']}, function(path){
      console.log(path);
      console.log(folderTree(path[0], false, null));
      return folderTree(path[0], false, null)
      if (callback) {
        return callback(path)
      }
    })
  },
  createFile: function(path, name) {

  },
  createFolder: function(path, name) {
    fs.mkdirs(`{$path}\${name}`, function (err) {
      if (err) return console.error(err)
      console.log("success!")
    });
  },
  deletFile: function(path) {
    fs.remove(path, function (err) {
      if (err) return console.error(err)
      console.log('success!')
    });
  },
  editFile: function(path) {

  },
  // 初始化專案 => 建立package json
  init: function() {

  },
  // 安裝專案
  install: function(url) {

  },
  // 儲存專案
  save: function(name, path, content) {
    return ;
  }
};

export default ProjectActions;
