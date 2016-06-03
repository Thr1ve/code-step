import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import { pickStep } from 'scenes/CodeStep/services';

import StepIcon from './components/StepIcon';
import MenuLayerTransitionable from '../../components/MenuLayerTransitionable';

const SelectionBar = React.createClass({
  propTypes: {
    currentStep: PropTypes.number,
    totalSteps: PropTypes.number
  },

  handleClick(step) {
    const { dispatch } = this.props;
    return function(e) {
      dispatch(pickStep(step));
    };
  },

  render() {
    return (
      <MenuLayerTransitionable className={styles.selectionBar}>
        {Array.from(
          { length: this.props.totalSteps },
          (val, i) =>
            <StepIcon
              key={i}
              isCurrent={i + 1 === this.props.currentStep}
              onClick={this.handleClick(i)}
              step={i + 1}
            />
        )}
      </MenuLayerTransitionable>
    );
  }
});


const mapStateToProps = (state) => {
  const { selectedIndex, options } = state.codeStep.menu;
  return {
    currentStep: selectedIndex + 1,
    totalSteps: options.length
  };
};

export default connect(mapStateToProps)(SelectionBar);
