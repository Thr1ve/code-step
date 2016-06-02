
import { combineReducers } from 'redux';

import code from '../scenes/Code/services/reducer';
import steps from './step/reducer';
import note from '../scenes/Notes/services/reducer';
import scopes from '../scenes/ScopesBar/services/reducer';
import menu from '../scenes/MenuLayer/services/reducer';
import lessons from './lessons/reducer';
import nav from './nav/reducer';

const rootReducer = combineReducers({
  code,
  steps,
  note,
  scopes,
  menu,
  lessons,
  nav
});

export default rootReducer;
