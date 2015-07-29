var fs = require('fs');
var path = require('path');

module.exports = function folderTree (filename){
  var stats = fs.lstatSync(filename),
  info = {
    path: filename,
    name: path.basename(filename)
  };

  if (stats.isDirectory()) {
    info.type = "folder";
    info.children = fs.readdirSync(filename).map(function(child) {
        return folderTree(filename + '/' + child);
    });
  } else {
    info.type = "file";
  }

  return info;
}
