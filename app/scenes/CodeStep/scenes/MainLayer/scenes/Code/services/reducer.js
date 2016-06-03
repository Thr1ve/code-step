import { SET_ZOOM, INIT_CODE, SET_HIGHLIGHTS } from './actions';

export default function codeReducer(state = {
  lines: [],
  highlightedLines: [],
  verticalOffset: 0,
  logestLineLength: 0,
  zoom: 0,
}, action) {
  switch (action.type) {
    case SET_ZOOM:
      return {
        ...state,
        zoom: action.zoom
      };
    case SET_HIGHLIGHTS:
      return {
        ...state,
        highlightedLines: action.linesArray,
        lines: state.lines.map((line, i) =>
          ({ ...line, highlighted: !!action.lines[i + 1] })),
        verticalOffset: action.linesArray.length &&
          action.linesArray.reduce((prev, cur) => prev + cur) / action.linesArray.length,
      };
    case INIT_CODE:
      return {
        ...state,
        ...processLines(action.lines)
      };
    default:
      return state;
  }
}

function processLines(linesArr) {
  let lines = linesArr.map((line, i) =>
    ({
      highlighted: false,
      text: line,
      lineNumber: i + 1
    }));
  return {
    lines,
    longestLineLength: lines.length === 0 ? 0 : lines.reduce((prev, cur) =>
      (prev.text.length > cur.text.length ? prev : cur)).text.length
  };
}
