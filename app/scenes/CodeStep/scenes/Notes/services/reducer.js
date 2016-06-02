import { SET_NOTE } from './actions';

export default function noteReducer(state = {
  current: ''
}, action) {
  switch (action.type) {
    case SET_NOTE:
      return {
        ...state,
        current: action.note || ''
      };
    default:
      return state;
  }
}
