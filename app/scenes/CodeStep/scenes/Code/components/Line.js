import React from 'react';

const styles = {
  transition: 'font-size 0.2s, transform 0.4s',
};

const Line = ({ lineNumber, text, highlighted, vw = 1, translate = 'none' }) => {
  return (
    <div
      style={{
        opacity: `${highlighted ? 1 : 0.5}`,
        fontSize: `${highlighted ? vw * 1.03 : vw}vw`,
        // TODO: make this math not terrible and abstract elsewhere
        transform: `translateY(${translate === 'none' ? none : ((-translate * 5) + 10)}vh)`,
        ...styles
      }}
    >
      {`${lineNumber}. ${text}`}
    </div>
  );
};

export default Line;
