
import { combineReducers } from 'redux';

import code from '../scenes/CodeStep/services/code/reducer';
import steps from '../scenes/CodeStep/services/step/reducer';
import note from '../scenes/CodeStep/services/notes/reducer';

const rootReducer = combineReducers({
  code,
  steps,
  note
});

export default rootReducer;
