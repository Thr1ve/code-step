import { previousStep, nextStep } from '../step/actions';
import { toggleMenuVisibility } from '../menu/actions';

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
      return console.log('next menu selection');
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
      return console.log('previous menu selection');
    default:
      break;
  }
};
