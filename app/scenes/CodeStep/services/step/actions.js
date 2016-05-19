import { updateHighlights } from '../code/actions';
import { setNote } from '../notes/actions';
import { setScopes, processScopes } from '../scopes/actions';

export const LOAD_STEPS = 'LOAD_STEPS';
export const loadSteps = steps =>
  ({ type: LOAD_STEPS, steps });

export const SET_NEXT_STEP = 'SET_NEXT_STEP';
export const setNextStep = () =>
  ({ type: SET_NEXT_STEP });

export const SET_PREVIOUS_STEP = 'SET_PREVIOUS_STEP';
export const setPreviousStep = () =>
  ({ type: SET_PREVIOUS_STEP });

export const SET_STEP = 'SET_STEP';
export const setStep = (n) =>
  ({ type: SET_STEP, n });


export const executeCurrentStep = () => (dispatch, getState) => {
  const { loadedSteps, currentStep } = getState().steps;
  dispatch(updateHighlights(loadedSteps[currentStep].highlighted));
  dispatch(setScopes(loadedSteps[currentStep].scopes));
  if (typeof loadedSteps[currentStep].note === 'function') {
    dispatch(setNote(loadedSteps[currentStep].note(getState(), dispatch)));
  } else {
    dispatch(setNote(loadedSteps[currentStep].note));
  }
};

export const initSteps = steps => dispatch => {
  dispatch(loadSteps(processScopes(steps)));
  dispatch(executeCurrentStep());
};

export const nextStep = () => dispatch => {
  dispatch(setNextStep());
  dispatch(executeCurrentStep());
};

export const previousStep = () => dispatch => {
  dispatch(setPreviousStep());
  dispatch(executeCurrentStep());
};

export const pickStep = (n) => dispatch => {
  dispatch(setStep(n));
  dispatch(executeCurrentStep());
};
