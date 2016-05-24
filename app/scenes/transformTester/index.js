import React from 'react';

import styles from './styles.css';

import Controller from './ControlPanel';

const TransformTester = React.createClass({
  getInitialState() {
    return {
      snapShots: []
    };
  },

  snapShot(boxState) {
    this.setState({
      snapShots: this.state.snapShots.concat(boxState)
    });
  },

  render() {
    return (
      <div>
        <div className={styles.header}>
        </div>
        <Controller snapShot={this.snapShot} />
      </div>
    );
  }
});

export default TransformTester;
