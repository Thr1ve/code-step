import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import { initCode, initSteps } from './services';

import SideBar from './scenes/SideBar';
import ProgressBar from './scenes/ProgressBar';
import Notes from './scenes/Notes';
import Code from './scenes/Code';

import code from '../../code.js';

// const border = (color) => ({ border: `5px solid ${color}` });
const steps = [
  { highlighted: [1], note: 'hello there' },
  { highlighted: [2], note: 'how are you' },
  { highlighted: [3] },
  { highlighted: [5] },
  { highlighted: [7, 8, 9] },
  { highlighted: [10] },
  { highlighted: [12] },
  { highlighted: [14, 15, 16, 17, 18, 19, 20, 21, 22] },
];

const Layout = React.createClass({
  componentDidMount() {
    this.props.dispatch(initCode(code.split('\n')));
    this.props.dispatch(initSteps(steps));
  },

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.codeContainer}>
            <ProgressBar />
            <Code />
          </div>
          <Notes />
        </div>
        <SideBar />
      </div>
    );
  }
});

export default connect()(Layout);
