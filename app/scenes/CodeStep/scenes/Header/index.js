import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { nextStep, previousStep, toggleMenu } from '../../services';

import styles from './styles.css';

const Header = ({ dispatch }) => {
  return (
    <div className={styles.header}>
      <div onClick={menu} className={styles.headerLeft}>
        menu [esc]
      </div>
      <div className={styles.headerRight}>
        <div className={styles.buttonGroup}>
          <div onClick={previous} className={styles.button}>
            previous [k]
          </div>
          <div onClick={next} className={styles.button}>
            next [j]
          </div>
        </div>
      </div>
    </div>
  );

  function menu() {
    dispatch(toggleMenu());
  }

  function next() {
    dispatch(nextStep());
  }

  function previous() {
    dispatch(previousStep());
  }
};

Header.propTypes = {
  dispatch: PropTypes.func
};


export default connect()(Header);
