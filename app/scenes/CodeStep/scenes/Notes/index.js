import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import { CodeStepLayer } from 'components/transitionable';

const Notes = ({ note }) =>
  <CodeStepLayer className={styles.notes}>
    {note}
  </CodeStepLayer>;

Notes.propTypes = {
  note: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

const mapStateToProps = state => ({ note: state.codeStep.note.current });

export default connect(mapStateToProps)(Notes);
