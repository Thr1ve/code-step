
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

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="codeStep" component={CodeStep} />
    <Route path="code" component={CodeEditor} />
  </Route>
);

export default Routes;
