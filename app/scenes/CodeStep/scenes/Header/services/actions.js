import { thunk } from 'lib';

export const SET_ANIMATE_TRUE = 'SET_ANIMATE_TRUE'
export const setAnimateTrue = button =>
  ({ type: SET_ANIMATE_TRUE, button });

export const SET_ANIMATE_FALSE = 'SET_ANIMATE_FALSE'
export const setAnimateFalse = button =>
  ({ type: SET_ANIMATE_FALSE, button });

export const pressButton = button => dispatch => {
  dispatch(setAnimateTrue(button));
  thunk(150, () => dispatch(setAnimateFalse(button)));
};
