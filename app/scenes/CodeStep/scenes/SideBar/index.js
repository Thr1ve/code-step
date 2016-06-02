import React from 'react';
import { connect } from 'react-redux';
import { sidebar } from './styles.css';

import Visualiser from 'components/Visualiser';

import { setScopes } from '../../services';

const SideBar = React.createClass({
  render() {
    const { scopes, visible } = this.props;
    return (
      <div
        className={sidebar}
        style={{
          transition: 'transform 0.4s, opacity 0.2s',
          transform: `${visible ? '' : 'translateZ(-50vw)'}`,
          opacity: `${visible ? '1' : '0.2'}`
        }}
      >
        <Visualiser
          data={scopes}
          useHljs='false'
        />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    scopes: state.codeStep.scopes,
    visible: !state.codeStep.menu.visible
  };
}

export default connect(mapStateToProps)(SideBar);
