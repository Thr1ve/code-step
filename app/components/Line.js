import React from 'react';

const Line = ({ lineNumber, text, highlighted }) => {
  return (
    <div style={{fontSize: `${highlighted ? 24 : 12}`}}>
      {`${lineNumber}. ${text}`}
    </div>
  )
}

export default Line;
