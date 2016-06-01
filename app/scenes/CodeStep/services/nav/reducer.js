import { SET_LAYER } from './actions';

export default function navReducer(state = {
  layer: 'CODESTEP'
}, action) {
  switch (action.type) {
    case SET_LAYER:
      return {
        ...state,
        layer: action.layer
      };
    default:
      return state;
  }
}
