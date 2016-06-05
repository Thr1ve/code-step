import { SET_ANIMATE_TRUE, SET_ANIMATE_FALSE } from './actions';

export default function headerReducer(state = {
  prevButton: false,
  nextButton: false,
  menuButton: false
}, action) {
  switch (action.type) {
    case SET_ANIMATE_TRUE:
      return {
        ...state,
        [action.button]: true
      };
    case SET_ANIMATE_FALSE:
      return {
        ...state,
        [action.button]: false
      };
    default:
      return state;
  }
}
