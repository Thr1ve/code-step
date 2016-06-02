import {
  MENU_SELECT_PREVIOUS, MENU_SELECT_NEXT,
  TOGGLE_MENU_VISIBILITY, SET_MENU_OPTIONS
} from './actions';

export default function menuReducer(state = {
  visible: false,
  options: [],
  selectedIndex: 0
}, action) {
  switch (action.type) {
    case TOGGLE_MENU_VISIBILITY:
      return {
        ...state,
        visible: !state.visible
      };
    case SET_MENU_OPTIONS:
      return {
        ...state,
        options: action.options
      };
    case MENU_SELECT_NEXT:
      return {
        ...state,
        selectedIndex: state.selectedIndex + 1 >= state.options.length ? 0 : state.selectedIndex + 1
      };
    case MENU_SELECT_PREVIOUS:
      return {
        ...state,
        selectedIndex: state.selectedIndex - 1 < 0 ? state.options.length - 1 : state.selectedIndex - 1
      };
    default:
      return state;
  }
}
