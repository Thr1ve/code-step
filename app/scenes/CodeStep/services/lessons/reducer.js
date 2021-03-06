import { SET_CURRENT_LESSON, SET_LESSONS, ADD_LESSONS } from './actions';

export default function lessonsReducer(state = {
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
        available: action.lessons
      };
    case ADD_LESSONS:
      return {
        ...state,
        available: {
          ...state.available,
          ...action.lessons
        }
      };
    default:
      return state;
  }
}
