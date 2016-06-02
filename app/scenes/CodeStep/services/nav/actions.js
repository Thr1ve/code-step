import {
  previousStep, nextStep,
  menuSelectPrevious, menuSelectNext,
  toggleMenuVisibility, setCurrentLesson,
  startLesson
} from '../index';

export const SET_LAYER = 'SET_LAYER';
export const setLayer = layer => ({ type: SET_LAYER, layer });

// TODO: hack-ish...find a better way to organize this
export const toggleMenu = () => (dispatch, getState) => {
  const { layer } = getState().codeStep.nav;
  if (layer === 'MENU') {
    dispatch(setLayer('CODESTEP'));
  } else if (layer === 'CODESTEP') {
    dispatch(setLayer('MENU'));
  }
  dispatch(toggleMenuVisibility());
};

export const up = () => (dispatch, getState) => {
  const { layer } = getState().codeStep.nav;
  switch (layer) {
    case 'CODESTEP':
      return dispatch(nextStep());
    case 'MENU':
      return dispatch(menuSelectNext());
    default:
      break;
  }
};

export const down = () => (dispatch, getState) => {
  const { layer } = getState().codeStep.nav;
  switch (layer) {
    case 'CODESTEP':
      return dispatch(previousStep());
    case 'MENU':
      return dispatch(menuSelectPrevious());
    default:
      break;
  }
};

export const enter = lessonName => (dispatch, getState) => {
  const { nav, menu } = getState().codeStep;
  const { layer } = nav;
  const { options, selectedIndex } = menu;
  switch (layer) {
    case 'CODESTEP':
      break;
    case 'MENU':
      dispatch(setCurrentLesson(options[selectedIndex]));
      dispatch(startLesson());
      dispatch(toggleMenu());
      break;
    default:
      break;
  }
};
