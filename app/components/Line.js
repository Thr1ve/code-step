import React from 'react';

const styles = {
  transition: 'font-size 0.2s',
}

const Line = ({ lineNumber, text, highlighted }) => {
  return (
    <div style={{
      opacity: `${highlighted ? 1 : 0.5}`,
      fontSize: `${highlighted ? 14 : 12}`,
      ...styles
    }}>
      {`${lineNumber}. ${text}`}
    </div>
  )
}

export default Line;
