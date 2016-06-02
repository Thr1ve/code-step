// This is only a here because I might expand CodeSelect into a full menu later
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import CodeSelect from './scenes/CodeSelect';

const Menu = ({ visible, dispatch }) => (
  <div
    className={styles.menu}
    style={{ display: `${visible ? 'flex' : 'none'}` }}
  >
    <CodeSelect />
  </div>
);

Menu.propTypes = {
  visible: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    visible: state.codeStep.menu.visible
  };
}

export default connect(mapStateToProps)(Menu);
