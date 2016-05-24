
import { combineReducers } from 'redux';

import snapShots from './snapShots/reducer';
import moveBox from './moveBox/reducer';

const rootReducer = combineReducers({
  snapShots,
  moveBox
});

export default rootReducer;
