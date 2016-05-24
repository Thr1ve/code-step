import React from 'react';

// import styles from './styles.css';

import ControlPanel from './ControlPanel';

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
        <ControlPanel snapShot={this.snapShot} />
      </div>
    );
  }
});

export default TransformTester;
