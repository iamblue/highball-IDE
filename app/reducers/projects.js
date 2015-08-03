import {
  LOAD_PROJECTS,
  CREATE_A_FILE
} from '../constants/ActionTypes';

const initialState = {
  projectPath: {},
  readable: true,
  editable: true
}

export default function projects( state = initialState, action ) {

  switch ( action.type ) {

    case LOAD_PROJECTS:
      return state;

    case CREATE_A_FILE:
      return state;

    default:
      return state;
  }
}
