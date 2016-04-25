
import { combineReducers } from 'redux';

import code from './codeReducer';
import steps from './stepReducer';

const rootReducer = combineReducers({
  code,
  steps
  // add more reducers here...
});

export default rootReducer;

