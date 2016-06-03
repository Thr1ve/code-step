import React from 'react';

const styles = {
  transition: 'font-size 0.3s, transform 0.4s',
};

const Line = ({ lineNumber, text, highlighted, vw = 1 }) => {
  return (
    <div
      style={{
        fontFamily: 'inherit',
        opacity: `${highlighted ? 1 : 0.6}`,
        fontSize: `${vw}vw`,
        transform: `
          translateY(${highlighted ? 0.5 : 0}px)
          translateX(${highlighted ? 7 : 0}px)
          translateZ(${highlighted ? 3 : -5}px)
        `,
        ...styles
      }}
    >
      {`${lineNumber <= 9 ? ` ${lineNumber}` : `${lineNumber}`}. ${text}`}
    </div>
  );
};

export default Line;
