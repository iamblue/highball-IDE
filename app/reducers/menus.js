import {
  OPEN_MENU,
  CLOSE_MENU
} from '../constants/ActionTypes';
import assign from 'object-assign';
const initialState = {
  status: false
}

export default function menus( state = initialState, action ) {

  switch ( action.type ) {

    case OPEN_MENU:
      return assign({}, state, { status: true });

    case CLOSE_MENU:
      return assign({}, state, { status: false });

    default:
      return state;
  }
}
