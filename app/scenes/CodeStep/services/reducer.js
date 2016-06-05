
import { combineReducers } from 'redux';

import { code, note, scopes, steps } from '../scenes/MainLayer/services/reducer';
import menu from '../scenes/MenuLayer/services/reducer';
import header from '../scenes/Header/services/reducer';
import lessons from './lessons/reducer';
import nav from './nav/reducer';

const rootReducer = combineReducers({
  code,
  steps,
  note,
  scopes,
  menu,
  lessons,
  nav,
  header
});

export default rootReducer;
