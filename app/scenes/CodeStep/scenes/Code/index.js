import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import Line from './components/Line';

const Code = ({ lines, offset, longestLineLength, currentStep, visible }) => (
  <div className={styles.code} style={{
    transition: 'transform 0.4s, opacity 0.2s',
    transform: `${visible ? '' : 'translateZ(-50vw)'}`,
    opacity: `${visible ? '1' : '0.2'}`
  }}>
    <div>
      <pre style={{
        fontFamily: '"Roboto Mono", monospace',
        perspective: '1000px',
        transition: 'transform 0.4s',
        transform: `
      translateY(${offset === 'none' ? 'none' : ((-offset * 2) + 20)}vh)` }}
      >
        {lines.map((line, i) => (
          <Line
            key={i}
            lineNumber={i + 1}
            text={line.text}
            highlighted={line.highlighted}
            vw={getVWSize(longestLineLength)}
          />
        ))}
      </pre>
    </div>
  </div>
);

Code.propTypes = {
  lines: PropTypes.array,
  highlightedLines: PropTypes.array,
  longestLineLength: PropTypes.number
};


const mapStateToProps = (state) => {
  const { visible } = state.codeStep.menu;
  const { lines, highlightedLines } = state.codeStep.code;
  const offset = highlightedLines.length &&
    highlightedLines.reduce((prev, cur) => prev + cur) / highlightedLines.length;

  // TODO: move longestLineLength logic to reducer and just add it as property to our state
  return {
    visible: !visible,
    lines,
    offset,
    currentStep: state.codeStep.steps.currentStep,
    longestLineLength: lines.length === 0 ? 0 : lines.reduce((prev, cur) =>
      (prev.text.length > cur.text.length ? prev : cur)).text.length
  };
};

export default connect(mapStateToProps)(Code);

// This helps adjusts the font size so that the longest line will always fit horizontally
function getVWSize(num) {
  return 1.08 / (num / 100);
}
