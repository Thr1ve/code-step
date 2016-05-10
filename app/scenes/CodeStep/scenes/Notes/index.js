import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { notes } from './styles.css';

import { nextStep, previousStep } from '../../services';

const Notes = React.createClass({
  propTypes: {
    note: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  },

  next() {
    this.props.dispatch(nextStep());
  },

  previous() {
    this.props.dispatch(previousStep());
  },

  render() {
    const { note } = this.props;
    return (
      <div className={notes}>
        {note}
        <div style={{ float: 'right' }}>
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.next}>Next</button>
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => ({ note: state.note.current });

export default connect(mapStateToProps)(Notes);
