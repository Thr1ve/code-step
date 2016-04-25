import React from 'react';
import { connect } from 'react-redux';

import Line from '../components/Line';
import { initialize, initSteps, nextStep, previousStep } from '../actions';

import code from '../code';

const steps = [
  { highlighted: [1]},
  { highlighted: [2]},
  { highlighted: [3]},
  { highlighted: [5]},
  { highlighted: [7, 8, 9]},
  { highlighted: [10]},
  { highlighted: [12]},
  { highlighted: [14, 15, 16, 17, 18, 19, 20, 21, 22]},
];

const TestContainer = React.createClass({
  componentDidMount() {
    this.props.dispatch(initialize(code.split('\n')));
    this.props.dispatch(initSteps(steps));
  },

  nextStep() {
    this.props.dispatch(nextStep());
  },

  previousStep() {
    this.props.dispatch(previousStep());
  },

  render() {
    const { lines } = this.props
    return (
      <div>
        <button onClick={this.previousStep}> Previous </button>
        <button onClick={this.nextStep}> Next </button>
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
