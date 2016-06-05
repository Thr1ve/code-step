import {
  previousStep, nextStep,
  menuSelectPrevious, menuSelectNext,
  toggleMenuVisibility, setCurrentLesson,
  startLesson, pressButton
} from '../index';

export const SET_LAYER = 'SET_LAYER';
export const setLayer = layer => ({ type: SET_LAYER, layer });

const layers = {
  CODESTEP: {
    up: dispatch => dispatch(nextStep()),
    down: dispatch => dispatch(previousStep()),
    enter: () => {},
    toggleMenu: dispatch => {
      dispatch(setLayer('MENU'));
      dispatch(toggleMenuVisibility());
    },
  },
  MENU: {
    up: dispatch => dispatch(menuSelectNext()),
    down: dispatch => dispatch(menuSelectPrevious()),
    enter: (dispatch, state) => {
      const { menu } = state.codeStep;
      const { options, selectedIndex } = menu;
      dispatch(setCurrentLesson(options[selectedIndex]));
      dispatch(startLesson());
      dispatch(toggleMenu());
    },
    toggleMenu: dispatch => {
      dispatch(setLayer('CODESTEP'));
      dispatch(toggleMenuVisibility());
    },
  }
};

export const toggleMenu = () => (dispatch, getState) => {
  const { layer } = getState().codeStep.nav;
  dispatch(pressButton('menuButton'));
  return layers[layer].toggleMenu(dispatch);
};

export const up = () => (dispatch, getState) => {
  const { layer } = getState().codeStep.nav;
  dispatch(pressButton('nextButton'));
  return layers[layer].up(dispatch);
};

export const down = () => (dispatch, getState) => {
  const { layer } = getState().codeStep.nav;
  dispatch(pressButton('prevButton'));
  return layers[layer].down(dispatch);
};

export const enter = () => (dispatch, getState) => {
  const state = getState();
  const { nav: { layer } } = state.codeStep;
  return layers[layer].enter(dispatch, state);
};
