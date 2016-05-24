import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

const Menu = ({ visible }) => (
  <div
    className={styles.menu}
    style={{ display: `${visible ? 'flex' : 'none'}` }}
  >
    It's a Menu
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
