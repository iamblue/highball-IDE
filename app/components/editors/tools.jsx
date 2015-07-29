var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var FontIcon = mui.FontIcon;
var IconButton = mui.IconButton;
import ProjectActions from '../../actions/ProjectActions';

// 開啟視窗
// dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]})

var EditorsToolsComponent = React.createClass({

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
      <ul>
        <li>
          <IconButton onClick={ ProjectActions.open }>
            <FontIcon className="fa fa-folder-open-o" />
          </IconButton>
        </li>
        <li>
          <IconButton onClick={ ProjectActions.save(this.props.name, this.props.path, this.props.content) }>
            <FontIcon className="fa fa-save"/>
          </IconButton>
        </li>
        <li>
          <IconButton>
            <FontIcon className="fa fa-location-arrow" />
          </IconButton>
        </li>
      </ul>
    );
  }

});

module.exports = EditorsToolsComponent;
