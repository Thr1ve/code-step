import React from 'react';
import { connect } from 'react-redux';
import { sidebar } from './styles.css';

import Visualiser from 'components/Visualiser';

import { setScopes } from '../../services';

const SideBar = React.createClass({
  render() {
    const { scopes } = this.props;
    return (
      <div className={sidebar}>
        <Visualiser
          data={scopes}
          useHljs='false'
        />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    scopes: state.codeStep.scopes
  };
}

export default connect(mapStateToProps)(SideBar);
