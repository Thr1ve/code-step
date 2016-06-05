import React from 'react';
import { connect } from 'react-redux';

const Transitionable = ({ children, style, ...props }) =>
  <div style={style} {...props}>
    {children}
  </div>;

export default Transitionable;
