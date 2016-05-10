
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import IndexPage from '../components/IndexPage';
import CodeEditor from '../components/CodeContainer';

import CodeStep from '../scenes/CodeStep';

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
    <Route path="indexTest" component={IndexPage} />
    <Route path="code" component={CodeEditor} />
  </Route>
);

export default Routes;
