import React from 'react';
import { connect } from 'react-redux';
import { sidebar } from './styles.css';

import { CodeStepLayer } from 'components/transitionable';
import Visualiser from 'components/Visualiser';

const SideBar = ({ scopes }) =>
  <CodeStepLayer
    className={sidebar}
  >
    <Visualiser
      data={scopes}
      useHljs='false'
    />
  </CodeStepLayer>;

const mapStateToProps = (state) => ({ scopes: state.codeStep.scopes });

export default connect(mapStateToProps)(SideBar);
