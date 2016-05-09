export const INITIALIZE = 'INITIALIZE';
export const initialize = lines =>
  ({ type: INITIALIZE, lines });

export const SET_HIGHLIGHTS = 'SET_HIGHLIGHTS';
export const setHighlights = lines =>
  ({ type: SET_HIGHLIGHTS, lines });

export const updateHighlights = linesArray => dispatch => {
  // Turn array into object for constant-time lookup in reducer
  var objectified = linesArray.reduce((prev, cur) => {
    if (!prev[cur]) {
      prev[cur] = true;
    }
    return prev;
  }, {});
  return dispatch(setHighlights(objectified));
};
