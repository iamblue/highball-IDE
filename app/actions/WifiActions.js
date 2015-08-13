// wifi 相關
import wifiscanner from 'node-wifiscanner';
import wireless from 'wireless';
import Promise from 'bluebird';

var WifiActions = {
  scan: function(callback) {
    return new Promise((resolve, reject) => {
      return wifiscanner.scan(function(err, data){
        if (err) {
          console.log("Error : " + err);
          return reject(err)
        }
        return resolve(data);
      });
    })
  },
  connect: function(config) {
    var wl = new Wireless(config);
    return wl.enable(function(err){
      wl.start();
    })
  }
};

module.exports = WifiActions;
