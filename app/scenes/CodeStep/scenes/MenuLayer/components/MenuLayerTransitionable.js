import React from 'react';
import { connect } from 'react-redux';
import Transitionable from 'components/Transitionable';

const MenuLayerTransitionable = ({ visible, ...props }) =>
  <Transitionable
    {...props}
    style={{
      transition: 'transform 0.4s, opacity 0.3s',
      opacity: `${visible ? '1' : '0'}`,
      transform: `${visible ? '' : 'translateZ(50vw)'}`,
      zIndex: `${visible ? '99999' : '0'}`,
    }}
  />;

const mapStateToProps = state => ({ visible: state.codeStep.menu.visible });

export default connect(mapStateToProps)(MenuLayerTransitionable);

      // display: `${visible ? 'flex' : 'none'}`,
