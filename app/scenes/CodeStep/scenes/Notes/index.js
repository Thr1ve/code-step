import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

const Notes = ({ note, visible }) => (
  <div
    className={styles.notes}
    style={{
      transition: 'transform 0.4s, opacity 0.2s',
      transform: `${visible ? '' : 'translateZ(-50vw)'}`,
      opacity: `${visible ? '1' : '0.2'}`
    }}
  >
    {note}
  </div>
);

Notes.propTypes = {
  note: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

const mapStateToProps = state =>
  ({ note: state.codeStep.note.current, visible: !state.codeStep.menu.visible });

export default connect(mapStateToProps)(Notes);
