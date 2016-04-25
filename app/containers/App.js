
import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';

import { nextStep, previousStep } from '../actions';

const App = React.createClass({
  stepPrevious() {
    this.props.dispatch(previousStep())
  },

  stepNext() {
    this.props.dispatch(nextStep())
  },

  render() {
    return (
      <div>
        <Header previous={this.stepPrevious} next={this.stepNext} />
        {this.props.children}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
