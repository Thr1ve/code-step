
import { combineReducers } from 'redux';

import snapShots from './snapShots/reducer';

const rootReducer = combineReducers({
  snapShots
});

export default rootReducer;
