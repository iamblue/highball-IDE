import React from 'react';
import AceEditor from 'react-ace-wrapper';
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var AppBar = mui.AppBar;
var packageList = require('../../tmp/package');

// board 的 package 放在 /boards 的資料夾下
// web 的 package 放在 package.json 的資料夾下

var ModuleList = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div>
        <ul>
          <li>{ packageList }</li>
        </ul>
        sdasdasd
      </div>
    );
  }

});

module.exports = ModuleList;
