import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import { initCode, initSteps } from './services';

import SideBar from './scenes/SideBar';
import ProgressBar from './scenes/ProgressBar';
import Notes from './scenes/Notes';
import Code from './scenes/Code';

import lesson from '../../../lessons/test1';
const { code, steps } = lesson;

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
