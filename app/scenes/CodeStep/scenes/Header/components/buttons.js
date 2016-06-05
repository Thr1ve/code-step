import React from 'react';
import { connect } from 'react-redux';

import Button from 'components/Button';

const mapStateToPropsPrev = state => ({ isAnimating: state.codeStep.header.prevButton });
export const PrevButton = connect(mapStateToPropsPrev)(Button);

const mapStateToPropsNext = state => ({ isAnimating: state.codeStep.header.nextButton });
export const NextButton = connect(mapStateToPropsNext)(Button);

const mapStateToPropsMenu = state => ({ isAnimating: state.codeStep.header.menuButton });
export const MenuButton = connect(mapStateToPropsMenu)(Button);
