import React from 'react';
import Radium from 'radium';

import mui from 'material-ui';
let {IconButton, FontIcon} = mui;
var ThemeManager = new mui.Styles.ThemeManager();

@Radium
export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.toggleMenu = this._toggleMenu.bind(this)
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div style={ styles.bg }>
        <div>
          <h1 style={ styles.h1 }>HighBall</h1>
        </div>
        <nav>
          <span style={ styles.span }>Menu</span>
          <a onTouchTap={ this.toggleMenu }>
            <IconButton>
              <FontIcon className="fa fa-bars"/>
            </IconButton>
          </a>
          <a>
            <IconButton>
              <FontIcon className="fa fa-plus"/>
            </IconButton>
          </a>
        </nav>
      </div>
    )
  }

  _toggleMenu(status) {
    this.props.actions.toggleMenu(true);
  }

}

HeaderContainer.childContextTypes = {
  muiTheme: React.PropTypes.object
};

var styles = {
  bg: {
    width: '900px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    paddingTop: '20px'
  },
  h1: {
    fontFamily: "Cuprum",
    letterSpacing: '2px'
  },
  span: {
    fontFamily: "Cuprum",
    letterSpacing: '2px',
    marginRight: '5px'
  }
}

export default HeaderContainer;
