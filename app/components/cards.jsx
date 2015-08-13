import React from 'react';
import mui from 'material-ui';
import Radium from 'radium';
import Switch from '../components/modules/switch';

let { Paper, Mixins, Styles, IconButton, FontIcon } = mui;
let { Colors, Spacing, Transitions, Typography } = Styles;
let { StylePropable, StyleResizable } = Mixins;
let Children = require('../utils/children');
let ThemeManager = new mui.Styles.ThemeManager();

@Radium
export default class Cards extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this._onMouseOver = this._onMouseOver.bind(this)
    this._onMouseOut = this._onMouseOut.bind(this)

  }

  componentDidMount (){
    // console.log(this.props.children)
    // console.log(this.refs['components'].data)
  }

  getInitialState() {
    return {
      zDepth: 0
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <Paper
        zDepth={this.state.zDepth}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
        style={{ width: '280px', height: '317px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px' }}
      >
        <IconButton tooltip="Sort">
          <FontIcon className="fa fa-arrows-alt"/>
        </IconButton>
        {
          Children.extend(this.props.children, {
            fullScreen: true,
            ref: "components"
          })
        }
      </Paper>
    );
  }

  _onMouseOver() {
    this.setState({
      zDepth: 4
    });
  }

  _onMouseOut() {
    this.setState({
      zDepth: 0
    });
  }

}

Cards.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Cards.mixins = [StylePropable, StyleResizable];

// Cards.propTypes = {
//   heading: React.PropTypes.string,
//   route: React.PropTypes.string,
//   img: React.PropTypes.string,
//   firstChild: React.PropTypes.bool,
//   lastChild: React.PropTypes.bool
// };

// var styles = {
//   outer: {
//     width: '360px',
//     height: '371px',
//     background: '#fff'
//   }
// }

export default Cards;
