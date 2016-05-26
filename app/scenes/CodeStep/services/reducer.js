
import { combineReducers } from 'redux';

import code from './code/reducer';
import steps from './step/reducer';
import note from './notes/reducer';
import scopes from './scopes/reducer';
import menu from './menu/reducer';
import lessons from './lessons/reducer';

const rootReducer = combineReducers({
  code,
  steps,
  note,
  scopes,
  menu,
  lessons
});

export default rootReducer;
