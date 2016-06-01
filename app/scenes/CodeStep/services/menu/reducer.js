import { TOGGLE_MENU_VISIBILITY } from './actions';

export default function menuReducer(state = {
  visible: false
}, action) {
  switch (action.type) {
    case TOGGLE_MENU_VISIBILITY:
      return {
        visible: !state.visible
      };
    default:
      return state;
  }
}
