import {
  previousStep, nextStep,
  menuSelectPrevious, menuSelectNext,
  toggleMenuVisibility, setCurrentLesson,
  startLesson
} from '../index';

export const SET_LAYER = 'SET_LAYER';
export const setLayer = layer => ({ type: SET_LAYER, layer });

const layers = {
  CODESTEP: {
    toggleMenu: dispatch => dispatch(setLayer('MENU')),
    up: dispatch => dispatch(nextStep()),
    down: dispatch => dispatch(previousStep()),
    enter: () => {}
  },
  MENU: {
    toggleMenu: dispatch => dispatch(setLayer('CODESTEP')),
    up: dispatch => dispatch(menuSelectNext()),
    down: dispatch => dispatch(menuSelectPrevious()),
    enter: (dispatch, state) => {
      const { menu } = state.codeStep;
      const { options, selectedIndex } = menu;
      dispatch(setCurrentLesson(options[selectedIndex]));
      dispatch(startLesson());
      dispatch(toggleMenu());
    }
  }
};

export const toggleMenu = () => (dispatch, getState) => {
  const { layer } = getState().codeStep.nav;
  layers[layer].toggleMenu(dispatch);
  dispatch(toggleMenuVisibility());
};

export const up = () => (dispatch, getState) => {
  const { layer } = getState().codeStep.nav;
  return layers[layer].up(dispatch);
};

export const down = () => (dispatch, getState) => {
  const { layer } = getState().codeStep.nav;
  return layers[layer].down(dispatch);
};

export const enter = () => (dispatch, getState) => {
  const state = getState();
  const { nav: { layer } } = state.codeStep;
  return layers[layer].enter(dispatch, state);
};
