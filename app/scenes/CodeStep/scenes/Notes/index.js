import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

const Notes = ({ note }) => (
  <div className={styles.notes}>
    {note}
  </div>
);

Notes.propTypes = {
  note: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

const mapStateToProps = (state) => ({ note: state.codeStep.note.current });

export default connect(mapStateToProps)(Notes);
