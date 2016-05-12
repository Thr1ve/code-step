import React, { PropTypes } from 'react';

const StepIcon = ({ step, onClick, isCurrent }) => {
  console.log(step, onClick, isCurrent);
  return (
    <div
      onClick={onClick}
      style={{
        color: `${isCurrent ? '#fafafa' : 'black'}`
      }}
    >
      {step}
    </div>

);
};

export default StepIcon;
