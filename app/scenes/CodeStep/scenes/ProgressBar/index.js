import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import StepIcon from './components/StepIcon';

import { pickStep } from '../../services/step/actions';

import { progressBar } from './styles.css';

const ProgressBar = React.createClass({
  propTypes: {
    currentStep: PropTypes.number,
    totalSteps: PropTypes.number
  },

  handleClick(step) {
    const { dispatch } = this.props;
    return function(e) {
      dispatch(pickStep(step));
    };
  },

  render() {
    return (
      <div className={progressBar}>
        {Array.from(
          { length: this.props.totalSteps },
          (val, i) =>
            <StepIcon
              key={i}
              isCurrent={i + 1 === this.props.currentStep}
              onClick={this.handleClick(i)}
              step={i + 1}
            />
        )}
      </div>
    );
  }
});


const mapStateToProps = (state) => {
  const { currentStep, loadedSteps } = state.steps;
  return {
    currentStep: currentStep + 1,
    totalSteps: loadedSteps.length
  };
};

export default connect(mapStateToProps)(ProgressBar);
