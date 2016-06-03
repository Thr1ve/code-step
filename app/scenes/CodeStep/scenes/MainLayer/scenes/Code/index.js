import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import MainLayerTransitionable from '../../components/MainLayerTransitionable';
import Line from './components/Line';

const Code = ({ lines, verticalOffset, vwSize, currentStep }) => (
  <MainLayerTransitionable className={styles.code} >
    <pre style={{
      fontFamily: '"Roboto Mono", monospace',
      perspective: '1000px',
      transition: 'transform 0.4s',
      transform: `
    translateY(${verticalOffset === 'none' ? 'none' : ((-verticalOffset * 2) + 20)}vh)` }}
    >
      {lines.map((line, i) => (
        <Line
          key={i}
          lineNumber={i + 1}
          text={line.text}
          highlighted={line.highlighted}
          vw={vwSize}
        />
      ))}
    </pre>
  </MainLayerTransitionable>
);

Code.propTypes = {
  lines: PropTypes.array,
  highlightedLines: PropTypes.array,
  longestLineLength: PropTypes.number
};


const mapStateToProps = (state) => {
  const { lines, zoom, verticalOffset, longestLineLength } = state.codeStep.code;

  return {
    lines,
    verticalOffset,
    vwSize: getVWSize(longestLineLength),
    currentStep: state.codeStep.steps.currentStep,
  };
};

export default connect(mapStateToProps)(Code);

// This helps adjusts the font size so that the longest line will always fit horizontally
function getVWSize(num, zoom = 0) {
  return (zoom ? zoom / 1.08 : 1.08) / (num / 100);
  // return 1.08 / (num / 100);
}
