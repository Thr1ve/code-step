import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import MainLayerTransitionable from '../../components/MainLayerTransitionable';

const Notes = ({ note }) =>
  <MainLayerTransitionable className={styles.notes}>
    {note}
  </MainLayerTransitionable>;

Notes.propTypes = {
  note: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

const mapStateToProps = state => ({ note: state.codeStep.note.current });

export default connect(mapStateToProps)(Notes);
