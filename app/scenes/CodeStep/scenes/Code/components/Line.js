import React from 'react';

const styles = {
  transition: 'font-size 0.2s',
};

const Line = ({ lineNumber, text, highlighted, vw = 1 }) => {
  return (
    <div
      style={{
        opacity: `${highlighted ? 1 : 0.5}`,
        fontSize: `${highlighted ? vw * 1.03 : vw}vw`,
        ...styles
      }}
    >
      {`${lineNumber}. ${text}`}
    </div>
  );
};

export default Line;
