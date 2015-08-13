import React from 'react';
import Radium from 'radium';
import Cards from '../components/cards';
import Switch from '../components/modules/switch';
import Debug from './debugContainer';
import Header from './index/headerContainer';
import Content from './index/contentContainer';
import Menu from './index/menuContainer';

import mui from 'material-ui';
let {IconButton, FontIcon} = mui;
var ThemeManager = new mui.Styles.ThemeManager();

@Radium
export default class HomePageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <Header actions={ this.props.actions }/>
        <div style={ styles.bg }>
          <Cards>
            <Switch />
          </Cards>
          <Cards>
            <Switch />
          </Cards>
          <Cards>
            <Switch />
          </Cards>
          <Cards>
            <Switch />
          </Cards>
          <Cards>
            <Switch />
          </Cards>
          <Cards>
            <Switch />
          </Cards>
        </div>
        <Debug />
      </div>
    )
  }

}

HomePageContainer.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default HomePageContainer;

var styles = {
  header: {
    width: '900px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    paddingTop: '30px'
  },
  bg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '980px',
    margin: '0 auto',
    flexWrap: 'wrap',
    paddingBottom: '80px'
  }
}
