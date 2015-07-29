var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var FontIcon = mui.FontIcon;
var IconButton = mui.IconButton;
var IconMenu = mui.IconMenu;
var Colors = mui.Styles.Colors;
var Dialog = mui.Dialog;
var FlatButton = mui.FlatButton;
var munusComponent = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    // ThemeManager.setPalette({
    //   textColor: Colors.deepOrange500
    // });
  },

  showDialog() {
    this.setState({show: true})
  },

  _handleStandardDialogTouchTap() {
    this.refs.standardDialog.show();
  },

  _handleCustomDialogCancel() {
    this.refs.standardDialog.dismiss();
  },

  _handleCustomDialogSubmit() {
    this.refs.standardDialog.dismiss();
  },

  render: function() {
    var iconButtonElement = <IconButton><FontIcon className="fa fa-link" /></IconButton>;
    let customActions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this._handleCustomDialogCancel} />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this._handleCustomDialogSubmit} />
    ];
    return (
      <nav>
        <a>
          <IconButton onTouchTap={this._handleStandardDialogTouchTap}>
            <FontIcon className="fa fa-wifi"  />
          </IconButton>
          <Dialog ref="standardDialog" title="Dialog With Scrollable Content" actions={customActions}
            autoDetectWindowHeight={true} autoScrollBodyContent={true}>
              <div style={{height: '2000px'}}>Really long content</div>
          </Dialog>
        </a>
        <a>
          <IconButton>
            <FontIcon className="fa fa-link" />
          </IconButton>
        </a>
      </nav>


    );
  }

});

module.exports = munusComponent;
