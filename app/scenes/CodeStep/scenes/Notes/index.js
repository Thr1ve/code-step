import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { notes } from './styles.css';

// const dummyNotesData = (
// 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

const Notes = ({ note }) => (
  <div className={notes}>
    {note}
  </div>
);

Notes.propTypes = {
  note: PropTypes.string
};

const mapStateToProps = (state) => ({ note: state.note.current });

export default connect(mapStateToProps)(Notes);
