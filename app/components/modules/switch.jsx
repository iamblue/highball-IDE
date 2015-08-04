import React from 'react';
import AceEditor from 'react-ace-wrapper';
var mui = require('material-ui');
let {Toggle} = mui;
var ThemeManager = new mui.Styles.ThemeManager();
var AppBar = mui.AppBar;

// board 的 package 放在 /boards 的資料夾下
// web 的 package 放在 package.json 的資料夾下

var Switch = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  data: '123',
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div>
        <Toggle
          name={ this.props.name }
          value={ this.props.value }
          label={ this.props.label } />
      </div>
    );
  }

});

module.exports = Switch;
