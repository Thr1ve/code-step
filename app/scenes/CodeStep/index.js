import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import Keybindings from '../../components/Keybindings';
import ProgressBar from './scenes/ProgressBar';
import Header from './scenes/Header';
import Menu from './scenes/MenuLayer';
import { Code, Notes, ScopesBar } from './scenes/MainLayer';

import {
  up, down, toggleMenu, enter,
  loadLessons, setCurrentLesson, startLesson
} from './services';

import test1 from '../../../lessons/test1';
import inceptionTest1 from '../../../lessons/inceptionTest1';

const lessons = { test1, inceptionTest1 };

const createKeyMap = dispatch => ({
  j: () => dispatch(up()),
  k: () => dispatch(down()),
  esc: () => dispatch(toggleMenu()),
  enter: () => dispatch(enter())
});

const Layout = React.createClass({
  componentDidMount() {
    this.props.dispatch(loadLessons(lessons));
    this.props.dispatch(setCurrentLesson('test1'));
    this.props.dispatch(startLesson());
  },

  render() {
    return (
      <Keybindings keyMap={createKeyMap(this.props.dispatch)}>
        <div className={styles.container}>
          <ProgressBar />
          <div className={styles.main}>
            <Menu />
            <Header />
            {this.props.currentLesson !== '__NONE__' ? <Code /> : <div> No lesson loaded </div>}
            <div className={styles.overlay}>
              <Notes />
            </div>
          </div>
          <ScopesBar />
        </div>
      </Keybindings>
    );
  }
});

function mapStateToProps(state) {
  return {
    currentLesson: state.codeStep.lessons.current
  };
}

export default connect(mapStateToProps)(Layout);
