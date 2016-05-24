
import { combineReducers } from 'redux';

import codeStep from '../scenes/CodeStep/services/reducer';
import transformTester from '../scenes/TransformTester/services/reducer';

const rootReducer = combineReducers({
  codeStep,
  transformTester
});

export default rootReducer;
