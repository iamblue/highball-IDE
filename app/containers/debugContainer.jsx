import React from 'react';
import Radium from 'radium';
import mui from 'material-ui';
let {FloatingActionButton, Dialog} = mui;
var ThemeManager = new mui.Styles.ThemeManager();

@Radium
export default class debugContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this._activeDebugDialog = this._activeDebugDialog.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <FloatingActionButton
          onTouchTap={this._activeDebugDialog}
          iconClassName="muidocs-icon-action-grade"
          style={{ position: 'fixed', bottom: '10px', right: '10px'}}
        />

      </div>
    )
  }
  _activeDebugDialog() {
    // this.refs
  }

}

// debugContainer.
debugContainer.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default debugContainer;
var styles = {

}
