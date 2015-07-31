import {default as React, PropTypes} from 'react';
import ProjectActions from '../../actions/ProjectActions';

class TreesComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      aaa: '456',
      bbb: props.aaa
    }

    // this._fetchJSON = this._fetchJSON.bind(this);
  }

  // static get PropTypes () {
  //   return {
  //     aaa: PropTypes.bool
  //   };
  // }

  _composeTree(){

  }

  render () {
    return(
      <div>{this.props.aaa}</div>
    )
  }

}

TreesComponent.propTypes = { aaa: PropTypes.bool };

export default TreesComponent;
