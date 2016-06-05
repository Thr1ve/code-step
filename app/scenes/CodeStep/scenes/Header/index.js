import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { up, down, toggleMenu } from '../../services';

import Button from 'components/Button';

import { PrevButton, NextButton, MenuButton } from './components/buttons';

import styles from './styles.css';

const Header = ({ dispatch }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.buttonGroup}>
          <MenuButton onClick={menu} animation='translateZ(-100px)'>
            menu [esc]
          </MenuButton>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.buttonGroup}>
          <PrevButton onClick={previous} animation='translateZ(-15px)'>
            previous [k]
          </PrevButton>
          <NextButton onClick={next} animation='translateZ(-15px)'>
            next [j]
          </NextButton>
        </div>
      </div>
    </div>
  );

  function menu() {
    dispatch(toggleMenu());
  }

  function next() {
    dispatch(up());
  }

  function previous() {
    dispatch(down());
  }
};

Header.propTypes = {
  dispatch: PropTypes.func
};


export default connect()(Header);
