
import { combineReducers } from 'redux';

import code from '../scenes/CodeStep/services/code/reducer';
import steps from '../scenes/CodeStep/services/step/reducer';
import note from '../scenes/CodeStep/services/notes/reducer';
import scopes from '../scenes/CodeStep/services/scopes/reducer';

const rootReducer = combineReducers({
  code,
  steps,
  note,
  scopes
});

export default rootReducer;
