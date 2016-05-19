import { INIT_CODE, SET_HIGHLIGHTS } from './actions';

export default function codeReducer(state = {
  lines: [],
  highlightedLines: [],
}, action) {
  switch (action.type) {
    case SET_HIGHLIGHTS:
      return {
        ...state,
        highlightedLines: action.linesArray,
        lines: state.lines.map((line, i) =>
          ({
            ...line,
            highlighted: !!action.lines[i + 1]
          })
        )
      };
    case INIT_CODE:
      return {
        ...state,
        lines: action.lines.map((line, i) =>
          ({
            highlighted: false,
            text: line,
            lineNumber: i + 1
          })
        )
      };
    default:
      return state;
  }
}
