import React, { PropTypes } from 'react';
import { stepIconStyles } from './styles.css';

const StepIcon = ({ step, onClick, isCurrent }) => {
  return (
    <div
      className={stepIconStyles}
      onClick={onClick}
      style={{
        color: `${isCurrent ? '#fafafa' : 'black'}`,
      }}
    >
      {step}
    </div>

);
};

export default StepIcon;
