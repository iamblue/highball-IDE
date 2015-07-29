// wifi 相關

var wifiscanner = require('node-wifiscanner');

var WifiActions = {
  scan: function(callback) {
    wifiscanner.scan(function(err, data){
      if (err) {
          console.log("Error : " + err);
          return;
      }
      return data;
    });
  }
};

export default WifiActions;
