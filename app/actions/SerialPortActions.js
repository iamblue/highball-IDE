// Serial port
var serialPort = require("serialport");

var SerialPortActions = {
  list: function() {
    serialPort.list(function (err, ports) {
      ports.forEach(function(port) {
        console.log(port.comName);
        console.log(port.pnpId);
        console.log(port.manufacturer);
      });
    });
  }
};

export default SerialPortActions;
