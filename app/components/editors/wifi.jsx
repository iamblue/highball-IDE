import React from 'react';
import Radium from 'radium';

import mui from 'material-ui';
import Wifi from '../../actions/WifiActions';

let {IconButton, FontIcon, List, ListItem} = mui;
var ThemeManager = new mui.Styles.ThemeManager();

@Radium
export default class WifiComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.wifi = []
  }

  componentDidMount() {
    Wifi
    .scan()
    .then((data)=>{
      console.log(data)
      return this.setState({ wifi: data });
    })
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    var elem;
    if (this.state.wifi.length === 0) {
      elem = 'loading...';
    } else {
      elem = this.state.wifi.map(function(elem, index){
        return <ListItem
          primaryText={ elem.ssid }
          leftIcon={
            <IconButton>
              <FontIcon className="fa fa-wifi" />
            </IconButton>
          }
          key={index}/>
      })
    }
    return (
      <div>
        <List>{elem}</List>
      </div>
    )
  }

}

WifiComponent.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default WifiComponent;
