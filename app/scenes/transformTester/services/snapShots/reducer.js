import { ADD_SNAPSHOT } from './actions';

export default function snapShotsReducer(state = [], action) {
  switch (action.type) {
    case ADD_SNAPSHOT:
      return [...state, action.snapShot];
    default:
      return state;
  }
}
