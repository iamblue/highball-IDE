import React from 'react';
import Radium from 'radium';

import mui from 'material-ui';
let {IconButton, FontIcon} = mui;
var ThemeManager = new mui.Styles.ThemeManager();

@Radium
export default class ContentContainer extends React.Component {
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
        123
      </div>
    )
  }

}

ContentContainer.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default ContentContainer;
