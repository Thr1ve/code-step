/* global __DEV__ */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CodeStep from '../scenes/CodeStep';

const App = ({ children }) =>
  <div>
    {children}
  </div>;

const base = __DEV__ === 'ghpages' ? '/code-step/' : '/';

const Routes = (
  <Route path={base} component={App}>
    <IndexRoute component={CodeStep} />
  </Route>
);

export default Routes;
