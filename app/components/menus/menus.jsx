import React from 'react';
import Radium from 'radium';
import mui from 'material-ui';
import Wifi from '../editors/wifi';

let {IconButton, FontIcon, IconMenu, Dialog, FlatButton, Styles} = mui;
var ThemeManager = new Styles.ThemeManager();
var Colors = Styles.Colors;

@Radium
export default class munusComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
    this._handleStandardDialogTouchTap = this._handleStandardDialogTouchTap.bind(this)
    this._handleCustomDialogCancel = this._handleCustomDialogCancel.bind(this)
    this._handleCustomDialogSubmit = this._handleCustomDialogSubmit.bind(this)
    this.showDialog = this.showDialog.bind(this)
    this.goBackToIndex = this._goBackToIndex.bind(this)
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  showDialog() {
    this.setState({show: true})
  }

  _handleStandardDialogTouchTap() {
    this.refs.standardDialog.show();
  }

  _handleCustomDialogCancel() {
    this.refs.standardDialog.dismiss();
  }

  _handleCustomDialogSubmit() {
    this.refs.standardDialog.dismiss();
  }

  _goBackToIndex() {
    this.props.actions.changeRoute('index');
  }

  render() {
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
          <IconButton onTouchTap={ this.goBackToIndex }>
            <FontIcon className="fa fa-reply"  />
          </IconButton>
        </a>
        <a>
          <IconButton onTouchTap={ this._handleStandardDialogTouchTap }>
            <FontIcon className="fa fa-wifi"  />
          </IconButton>
          <Dialog
            ref="standardDialog"
            title="Wifi list"
            actions={ customActions }
            autoDetectWindowHeight={true}
            autoScrollBodyContent={true}>
              <div style={{minHeight: '300px', overflowY:'auto'}}>
                <Wifi />
              </div>
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

};
munusComponent.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default munusComponent;
