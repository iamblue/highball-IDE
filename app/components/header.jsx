import React from 'react';
import Menus from './menus/menus';

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
          iconElementRight={ <Menus actions={ this.props.actions } style="color:#fff" /> }
          title={ this.props.title } />
      </div>
    );
  }

});

module.exports = Header;
