import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import Line from './components/Line';

// const lines = [
//   'this line is 30 characters$',
//   'this line is 50 characters long. this line is $',
//   'this line is 100 characters long.this line is 100 characters long.this line is 100 characters lo$',
//   // 'this line is 150 characters long.this line is 150 characters long.this line is 150 characters lonthis line is 150 characters long.this line is 150$',
//   // 'this line is 200 characters long.this line is 200 characters long.this line is 200 characters lonthis line is 200 characters long.this line is 200 characters long.this line is 200 characters long $'
// ];

const Code = ({ lines, longestLineLength, currentStep }) => (
  <div className={styles.code}>
    <pre>
      {lines.map((line, i) => (
        <Line
          key={i}
          lineNumber={i + 1}
          text={line.text}
          translate={currentStep}
          highlighted={line.highlighted}
          vw={getVWSize(longestLineLength)}
        />
      ))}
    </pre>
  </div>
);

Code.propTypes = {
  lines: PropTypes.array,
  longestLineLength: PropTypes.number
};


const mapStateToProps = (state) => {
  const { lines } = state.code;
  // TODO: move longestLineLength logic to reducer and just add it as property to our state
  return {
    lines,
    currentStep: state.steps.currentStep,
    longestLineLength: lines.length === 0 ? 0 : lines.reduce((prev, cur) =>
      (prev.text.length > cur.text.length ? prev : cur)).text.length
  };
};

export default connect(mapStateToProps)(Code);

// This helps adjusts the font size so that the longest line will always fit horizontally
function getVWSize(num) {
  return 1.08 / (num / 100);
}
