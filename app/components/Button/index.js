import React from 'react';

import styles from './styles.css';

const Button = ({ isAnimating, children, onClick, animation = ''}) =>
  <div className={styles.container}>
    <div
      onClick={onClick}
      className={styles.button}
      style={{ transform: `${isAnimating ? animation : ''}` }}
    >
      {children}
    </div>
  </div>;

export default Button;
