import React from 'react';
import { connect } from 'react-redux';
import { sidebar } from './styles.css';

import MainLayerTransitionable from '../../components/MainLayerTransitionable';
import Visualiser from 'components/Visualiser';

const SideBar = ({ scopes }) =>
  <MainLayerTransitionable
    className={sidebar}
  >
    <Visualiser
      data={scopes}
      useHljs='false'
    />
  </MainLayerTransitionable>;

const mapStateToProps = (state) => ({ scopes: state.codeStep.scopes });

export default connect(mapStateToProps)(SideBar);
