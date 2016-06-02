import React from 'react';
import { connect } from 'react-redux';

import { startLesson, setCurrentLesson, toggleMenu } from '../../services';

import styles from './styles.css';

const CodeSelect = React.createClass({
  createClickHandler(name) {
    return () => {
      this.props.dispatch(setCurrentLesson(name));
      this.props.dispatch(startLesson());
      this.props.dispatch(toggleMenu());
    };
  },

  render() {
    return (
      <div className={styles.container}>
        {
          this.props.availableLessons.map((lesson, i) =>
            <div
              key={i}
              onClick={this.createClickHandler(lesson)}
              className={i === this.props.selectedIndex ? styles.selectedLesson : styles.lesson}
            >
              {lesson}
            </div>)
        }
      </div>
    );
  }
});

function mapStateToProps(state) {
  const { options, selectedIndex } = state.codeStep.menu;
  return {
    availableLessons: options,
    selectedIndex
  };
}


export default connect(mapStateToProps)(CodeSelect);
