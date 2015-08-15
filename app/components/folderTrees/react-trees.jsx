import {default as React, PropTypes} from 'react';
import ProjectActions from '../../actions/ProjectActions';
import Radium from 'radium';

// react-tree-menu 有 syntax 問題，所以用這三個方法替代
import TreeMenu from '../../../node_modules/react-tree-menu/src/TreeMenu';
import TreeNode from '../../../node_modules/react-tree-menu/src/TreeNode';
import TreeMenuUtils from '../../../node_modules/react-tree-menu/src/TreeMenuUtils';

@Radium
export default class TreesComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {};
    this._setLastActionState = this._setLastActionState.bind(this)
    this._handleDynamicTreeNodePropChange = this._handleDynamicTreeNodePropChange.bind(this)

    // this._fetchJSON = this._fetchJSON.bind(this);
  }

  _setLastActionState(action, col, node) {
    var toggleEvents = ["collapsed", "checked", "selected"];
    if (toggleEvents.indexOf(action) >= 0) {
      action += "Changed";
    }
    console.log("Controller View received tree menu " + action + " action: " + node.join(" > "));
    var key = "lastAction" + col;
    var mutation = {};
    mutation[key] = {
      event: action,
      node: node.join(" > "),
      time: new Date().getTime()
    };
    this.setState(mutation)
  }

  _handleDynamicTreeNodePropChange(propName, lineage) {
    this._setLastActionState(propName, "1", lineage);
    this.setState(TreeMenuUtils.getNewTreeState(lineage, this.props.data, propName));
  }

  render () {
    return(
      <div>
        <TreeMenu
          expandIconClass="fa fa-chevron-right"
          collapseIconClass="fa fa-chevron-down"
          onTreeNodeClick={this._setLastActionState.bind(this, "clicked", "1")}
          onTreeNodeCollapseChange={this._handleDynamicTreeNodePropChange.bind(this, "collapsed")}
          onTreeNodeCheckChange={this._handleDynamicTreeNodePropChange.bind(this, "checked")}
          data={this.props.data} />
      </div>
    )
  }

}

TreesComponent.propTypes = { aaa: PropTypes.bool };

export default TreesComponent;
