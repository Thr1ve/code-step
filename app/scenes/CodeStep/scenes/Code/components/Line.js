import React from 'react';

const styles = {
  transition: 'font-size 0.2s, transform 0.4s',
};

const Line = ({ lineNumber, text, highlighted, vw = 1 }) => {
  return (
    <div
      style={{
        opacity: `${highlighted ? 1 : 0.5}`,
        // fontSize: `${highlighted ? vw * 1.03 : vw}vw`,
        fontSize: `${vw}vw`,
        // TODO: make this math not terrible and abstract elsewhere
        transform: `
          translateX(${highlighted ? 7 : 0}px)
          translateZ(${highlighted ? 5 : -5}px)
          `,
        ...styles
      }}
    >
      {`${lineNumber}. ${text}`}
    </div>
  );
};

export default Line;
