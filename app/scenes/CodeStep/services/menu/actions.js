export const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';
export const toggleMenuVisibility = () =>
  ({ type: TOGGLE_MENU_VISIBILITY });

export const MENU_SELECT_NEXT = 'MENU_SELECT_NEXT';
export const menuSelectNext = () => ({ type: MENU_SELECT_NEXT });

export const MENU_SELECT_PREVIOUS = 'MENU_SELECT_PREVIOUS';
export const menuSelectPrevious = () => ({ type: MENU_SELECT_PREVIOUS });

export const SET_MENU_OPTIONS = 'SET_MENU_OPTIONS';
export const setMenuOptions = options => ({ type: SET_MENU_OPTIONS, options });
