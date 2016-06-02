import React from 'react';
import { connect } from 'react-redux';

const Transitionable = ({ children, style, ...props }) =>
  <div style={style} {...props}>
    {children}
  </div>;

export default Transitionable;

const CodeStepMapStateToProps = state => ({ visible: !state.codeStep.menu.visible });

const LayerOne = ({ visible, ...props }) =>
  <Transitionable
    style={{
      transition: 'transform 0.4s, opacity 0.2s',
      transform: `${visible ? '' : 'translateZ(-50vw)'}`,
      opacity: `${visible ? '1' : '0.05'}`
    }}
    {...props}
  />;

export const CodeStepLayer = connect(CodeStepMapStateToProps)(LayerOne);

export const MenuLayer = ({ ...props }) =>
  <Transitionable {...props} />;
