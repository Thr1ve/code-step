
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CodeStep from '../scenes/CodeStep';
import TransformTester from '../scenes/TransformTester'; // eslint-disable-line

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

console.log(__DEV__);

const base = __DEV__ === 'ghpages' ? '/code-step/' : '/';

const Routes = (
  <Route path={base} component={App}>
    <IndexRoute component={CodeStep} />
    <Route path="transformTester" component={TransformTester} />
    {/* <Route path="code" component={CodeEditor} /> */}
  </Route>
);

export default Routes;
