import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import Keybindings from '../../components/Keybindings';
import SideBar from './scenes/SideBar';
import ProgressBar from './scenes/ProgressBar';
import Notes from './scenes/Notes';
import Code from './scenes/Code';
import Header from './scenes/Header';
import Menu from './scenes/Menu';

import { up, down, toggleMenu, loadLessons } from './services';

import test1 from '../../../lessons/test1';
import inceptionTest1 from '../../../lessons/inceptionTest1';

const lessons = { test1, inceptionTest1 };

const createKeyMap = dispatch => ({
  j: () => dispatch(up()),
  k: () => dispatch(down()),
  esc: () => dispatch(toggleMenu())
});

const Layout = React.createClass({
  componentDidMount() {
    this.props.dispatch(loadLessons(lessons));
  },

  render() {
    return (
      <Keybindings keyMap={createKeyMap(this.props.dispatch)}>
        <Menu />
        <div className={styles.container}>
          <ProgressBar />
          <div className={styles.main}>
            <Header />
            {this.props.currentLesson !== '__NONE__' ? <Code /> : <div> No lesson loaded </div>}
            <div className={styles.overlay}>
              <Notes />
            </div>
          </div>
          <SideBar />
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
