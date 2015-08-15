import {default as React, PropTypes} from 'react';
import ProjectActions from '../../actions/ProjectActions';
import Radium from 'radium';
@Radium
export default class Li extends React.Component {
  render () {
    var active = "fa fa-folder-o"
    var elem =
      <li key={this.props.data.name} style={styles.tree.li} ley><i className={active}></i><a key={this.props.data.name+'leaf'} style={styles.tree.a}> Root</a>

    if (this.props.data.hasOwnProperty('children')) {
      active = "fa fa-folder-open-o"
      elem =
        <ul>
          <li key={this.props.data.name} style={styles.tree.li} ley><i className={active}></i><a key={this.props.data.name+'leaf'} style={styles.tree.a}> Root</a>
        </ul>
    }
    for(var key in object) {
       console.log(object[key]);
    }
    return(
      <div>
        { elem }
      </div>
    )
  }
}

export default class TreesLiComponent extends React.Component {

}

export default class TreesComponent extends React.Component {

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
      <div style={ styles.tree }>
        <ul style={ styles.tree.ul }>
          <Li data={this.props.map}>
        </ul>
      </div>
    )
  }

}

TreesComponent.propTypes = { aaa: PropTypes.bool };

var styles = {
  tree: {
    ul: {
      listStyle: 'none',
      paddingLeft: '5px'
    },
    li: {
      paddingLeft: '16px',
      position: 'relative',
      boxSizing: 'border-box',
      ':before': {
        content: '',
        height: '1px',
        width: '10px',
        backgroundColor: '#333',
        position: 'absolute',
        top: '10px',
        left: 0,
        margin: 'auto'
      },
      ':after': {
        content: '',
        width: '1px',
        height: '100%',
        backgroundColor: '#333',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0
      },
      ':last-child': {
        ':after':{
          height: '10px'
        }
      }
    },
    a: {
      // corsor: 'pointer',
      ':hover': {
        color: '#333',
        textDecoration: 'none'
      }
    }
  }
}
export default TreesComponent;
