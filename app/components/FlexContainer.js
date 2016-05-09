import React from 'react';

const FlexContainer = ({
  children,
  style,
  inline=false,
  direction='nowrap',
  wrap='row',
  grow=0,
  shrink=0,
  basis='auto'
}) =>
  <div style={{
    display: inline ? 'inline-flex' : 'flex',
    flexDirection: direction,
    flexWrap: wrap,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    ...style
  }}>
    {children}
  </div>

export default FlexContainer;
