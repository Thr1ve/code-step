import { TOGGLE_MENU } from './actions';

export default function menuReducer(state = {
  visible: false
}, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        visible: !state.visible
      };
    default:
      return state;
  }
}
