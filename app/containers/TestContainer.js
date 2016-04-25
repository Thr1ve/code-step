import React from 'react';
import { connect } from 'react-redux';

import Line from '../components/Line';
import { initialize, initSteps, nextStep, previousStep } from '../actions';

import code from '../code';

const steps = [
  { highlighted: [1, 2]},
  { highlighted: [3, 4, 5]},
  { highlighted: [6, 7]},
  { highlighted: [8, 9, 10, 11]},
];

const TestContainer = React.createClass({
  componentDidMount() {
    this.props.dispatch(initialize(code.split('\n')));
    this.props.dispatch(initSteps(steps));
  },

  clickHandler() {
    this.props.dispatch(previousStep());
    // this.props.dispatch(nextStep());
  },

  render() {
    const { lines } = this.props
    return (
      <div onClick={this.clickHandler}>
        <pre>
          {lines.map((line, i) => <Line key={i} {...line} />)}
        </pre>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    lines: state.code.lines
  }
}

export default connect(mapStateToProps)(TestContainer);
