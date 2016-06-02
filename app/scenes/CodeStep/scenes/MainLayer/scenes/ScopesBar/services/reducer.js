import { SET_SCOPES } from './actions';

export default function scopesReducer(state = {}, action) {
  switch (action.type) {
    case SET_SCOPES:
      return action.scopesObj;
    default:
      return state;
  }
}
