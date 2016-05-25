import { LOAD_STEPS, SET_NEXT_STEP, SET_PREVIOUS_STEP, SET_STEP } from './actions';

export default function stepReducer(state = {
  loadedSteps: [],
  currentStep: 0
}, action) {
  switch (action.type) {
    case LOAD_STEPS:
      return {
        ...state,
        loadedSteps: action.steps,
        currentStep: 0
      };
    case SET_NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1 >= state.loadedSteps.length ? 0 : state.currentStep + 1
      };
    case SET_PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1 < 0 ? state.loadedSteps.length - 1 : state.currentStep - 1
      };
    case SET_STEP:
      return {
        ...state,
        currentStep: action.n
      };
    default:
      return state;
  }
}
