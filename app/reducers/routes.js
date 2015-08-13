import assign from 'object-assign';
import {
  ROUTE_CHANGE,
  TOGGLE_LOADING
} from '../constants/ActionTypes';

import page from 'page';

const initialState = {
  currentView: 'index',
  isLoading: false,
  loadingMsg: ''
};

export default function routes( state = initialState, action ) {

  switch ( action.type ) {

    case ROUTE_CHANGE:
      console.log( 'ROUTE_CHANGE: ', action );
      return assign({}, state, { currentView: action.view })

    case TOGGLE_LOADING:
      console.log( 'TOGGLE_LOADING: ', action );
      return assign({}, state, { isLoading: action.show, loadingMsg: action.msg });

    default:
      return state;
  }

}


