
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import IndexPage from '../components/IndexPage';
import Presentation from '../containers/Presentation'
import TestContainer from '../containers/TestContainer'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    { /* <Route path="present" component={Presentation} /> */ }
    <Route path="test" component={TestContainer} />
  </Route>
);

export default Routes;
