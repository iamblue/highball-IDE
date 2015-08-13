import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import * as AppActions from '../actions/AppActions';
import EditorContainer from './EditorContainer';
import HomePageContainer from './HomePageContainer';
import MenuContainer from './index/menuContainer';
var actions

export default class main extends Component {

  // <Connector> 是 container component，也就是 Dan 說的 smart component
  // 它對外取得 state 並偵聽 change event 以觸發重繪
  // 此處的 select 則可更精準的選取 state tree 中自已需要的部份，而不是所有 state 都改變都回應
  // 注意下面示範了 app 中可以有多個 <Connector> 元件，並且每個元件可 select 不同的 state

  render() {
    return (
      <div>

        <Connector select={ state => state }>
          {this.renderApp}
        </Connector>

        <Connector select={ state => state }>
          {this.renderMenu}
        </Connector>

      </div>
    );
  }

  // 傳來的第一個參數是個 obj，它直接對此 obj 做 distructuring
  // {dispatch: fn, todos: Array[8], routes: {...}}
  // 這裏單獨保留 dispatch fn，其它的 state tree 就放入 allStates{} 中
  // 也就是說整支程式的 state tree 是保存在　allState{} 裏面
  renderApp ( {dispatch, ...allStates}) {
    if(!actions)
      actions = bindActionCreators(AppActions, dispatch);
    var view;

    switch (allStates.routes.currentView) {
      case 'index':
        view = <HomePageContainer states={allStates} actions={actions}/>
        break;
      case 'editor':
        view = <EditorContainer states={allStates} actions={actions}/>
        break;
    }

    return <div>{ view }</div>;
  }

  renderMenu ( {dispatch, ...allStates}) {
    if(!actions)
      actions = bindActionCreators(AppActions, dispatch);

    var view;

    switch (allStates.menus.status) {
      case true:
        view = <MenuContainer states={allStates} actions={actions}/>
        break;
      case false:
        view = ''
        break;
      default:
        break;
    }

    return <div>{ view }</div>;

  }

}
