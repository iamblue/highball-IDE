import React from 'react';
import Radium from 'radium';
import color from 'color';
import mui from 'material-ui';
let {IconButton, FontIcon} = mui;
var ThemeManager = new mui.Styles.ThemeManager();

@Radium
export default class HomePageContainer extends React.Component {
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
        <div style={ styles.header.bg }>
          <div>
            <h1 style={ styles.header.h1 }>HighBall</h1>
          </div>
          <nav style={ styles.header.nav }>
            <span style={ styles.header.span }>Menu</span>
            <a onTouchTap={ this.toggleMenu }>
              <IconButton>
                <FontIcon className="fa fa-minus" style={{ textAlign: 'center' }}/>
              </IconButton>
            </a>
          </nav>
        </div>
        <div style={ styles.navBg }>
          <nav style={ styles.nav }>
            <a style={styles.nav.list}>create new component</a>
            <a style={styles.nav.list}>open component project</a>
          </nav>
        </div>
      </div>
    )
  }

  _toggleMenu() {
    this.props.actions.toggleMenu(false)
  }

}

HomePageContainer.childContextTypes = {
  muiTheme: React.PropTypes.object
};

var styles = {
  header:{
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
    nav: {
      marginRight: '48px'
    },
    span: {
      fontFamily: "Cuprum",
      letterSpacing: '2px',
      marginRight: '5px'
    }
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    list: {
      fontFamily: 'Cuprum',
      cursor:'pointer',
      padding: '10px 0px',
      fontSize: '18px'
    },
  },
  navBg: {
    display: 'flex',
    flexWrap: 'wrap',
    top: '0px',
    left: '0px',
    width: '100%',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  bg: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    display: 'flex',
    zIndex: 99,
    background: '#fff',
    top: '0px',
    left: '0px'
  }
}

export default HomePageContainer;
