import { INITIALIZE, SET_HIGHLIGHTS } from './actions';

export default function codeReducer(state = {
  lines: [],
}, action) {
  switch (action.type) {
    case SET_HIGHLIGHTS:
      return {
        ...state,
        lines: state.lines.map((line, i) =>
          ({
            ...line,
            highlighted: action.lines[i + 1] ? true : false
          })
        )
      };
    case INITIALIZE:
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
