import React from 'react';
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var AppBar = mui.AppBar;

var Header = React.createClass({
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
        <AppBar
          title={this.props.title} />
      </div>
    );
  }

});

module.exports = Header;
