import { SET_CURRENT_LESSON, SET_LESSONS, ADD_LESSONS } from './actions';

export default function lessonsReducer(state = {
  availableList: [],
  available: {},
  current: '__NONE__'
}, action) {
  switch (action.type) {
    case SET_CURRENT_LESSON:
      return {
        ...state,
        current: action.lessonName
      };
    case SET_LESSONS:
      return {
        ...state,
        availableList: Object.keys(action.lessons).map((l) => l),
        available: action.lessons
      };
    case ADD_LESSONS:
      return {
        ...state,
        // TODO: Need to verify that this actually works...
        availableList: [
          ...Object.keys(action.lessons).map((l) => l),
          ...state.availableList
        ],
        available: {
          ...state.available,
          ...action.lessons
        }
      };
    default:
      return state;
  }
}
