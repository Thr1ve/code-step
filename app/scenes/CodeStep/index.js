import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import Keybindings from '../../components/Keybindings';
import Header from './scenes/Header';
import { Menu, SelectionBar } from './scenes/MenuLayer';
import { ProgressBar, Code, Notes, ScopesBar } from './scenes/MainLayer';

import {
  up, down, toggleMenu, enter,
  loadLessons, setCurrentLesson, startLesson
} from './services';

import test1 from '../../../lessons/test1';
// import inceptionTest1 from '../../../lessons/inceptionTest1';
import FizzBuzz from '../../../lessons/FizzBuzz';
import FizzBuzz2 from '../../../lessons/FizzBuzz2';

const lessons = {
  test1,
  'Basic fizzBuzz': FizzBuzz,
  'Better fizzBuzz': FizzBuzz2
};

const createKeyMap = dispatch => ({
  j: () => dispatch(up()),
  k: () => dispatch(down()),
  esc: () => dispatch(toggleMenu()),
  enter: () => dispatch(enter())
});

const Layout = React.createClass({
  componentDidMount() {
    this.props.dispatch(loadLessons(lessons));
    this.props.dispatch(setCurrentLesson('Basic fizzBuzz'));
    this.props.dispatch(startLesson());
  },

  render() {
    return (
      <Keybindings keyMap={createKeyMap(this.props.dispatch)}>
        <div className={styles.container}>

          <div className={styles.trackBar}>
            <ProgressBar />
            <SelectionBar />
          </div>

          <div className={styles.main}>
            <Header />

            <Menu />
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
