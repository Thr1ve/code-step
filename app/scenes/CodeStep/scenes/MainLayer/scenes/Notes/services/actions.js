import React from 'react';

export const SET_NOTE = 'SET_NOTE';
export const setNote = note =>
  ({ type: SET_NOTE, note });

export const updateNote = note => (dispatch, getState) => {
  if (typeof note === 'function') {
    note = note(dispatch, getState().codeStep); // eslint-disable-line
  }
  return dispatch(setNote(reactify(note)));
};

function reactify(note) {
  if (typeof note === 'string') {
    return <div> {note} </div>;
  }
  return note;
}
