import React from 'react';
import { connect } from 'react-redux';
import Transitionable from 'components/Transitionable';

const MainLayerTransitionable = ({ visible, ...props }) =>
  <Transitionable
    style={{
      transition: 'transform 0.3s, opacity 0.2s',
      transform: `${visible ? '' : 'translateZ(-50vw)'}`,
      opacity: `${visible ? '1' : '0.05'}`
    }}
    {...props}
  />;

const MapStateToProps = state => ({ visible: !state.codeStep.menu.visible });

export default connect(MapStateToProps)(MainLayerTransitionable);
