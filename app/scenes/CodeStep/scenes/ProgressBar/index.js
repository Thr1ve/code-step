import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { progressBar } from './styles.css';

const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className={progressBar}>
    Cur: {currentStep + 1}
    <br />
    Total: {totalSteps}
  </div>
);

ProgressBar.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number
};

const mapStateToProps = (state) => {
  const { currentStep, loadedSteps } = state.steps;
  return {
    currentStep,
    totalSteps: loadedSteps.length
  };
};

export default connect(mapStateToProps)(ProgressBar);
