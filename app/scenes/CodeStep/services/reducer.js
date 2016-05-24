
import { combineReducers } from 'redux';

import code from './code/reducer';
import steps from './step/reducer';
import note from './notes/reducer';
import scopes from './scopes/reducer';

const rootReducer = combineReducers({
  code,
  steps,
  note,
  scopes
});

export default rootReducer;
