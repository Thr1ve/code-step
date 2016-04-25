import React from 'react';

const styles = {
  transition: 'font-size 0.5s',
}

const Line = ({ lineNumber, text, highlighted }) => {
  return (
    <div style={{fontSize: `${highlighted ? 18 : 12}`, ...styles}}>
      {`${lineNumber}. ${text}`}
    </div>
  )
}

export default Line;
