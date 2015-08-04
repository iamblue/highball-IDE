import React from 'react';
import Radium from 'radium';
import Cards from '../components/cards';
import Switch from '../components/modules/switch';
import Debug from './debugContainer';

@Radium
export default class HomePageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

  }

  render() {
    return (
      <div>
        <Debug />
        <div style={ styles.bg }>
          <Cards>
            <Switch/>
          </Cards>
          <Cards>
            <Switch />
          </Cards>
        </div>
      </div>
    )
  }

}


var styles = {
  bg: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
}
