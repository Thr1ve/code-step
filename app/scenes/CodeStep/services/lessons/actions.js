import { initCode, initSteps } from '../index';

export const ADD_LESSONS = 'ADD_LESSONS';
export const addLessons = lessons =>
  ({ type: ADD_LESSONS, lessons });

export const SET_LESSONS = 'SET_LESSONS';
export const setLessons = lessons =>
  ({ type: SET_LESSONS, lessons });

export const SET_CURRENT_LESSON = 'SET_CURRENT_LESSON';
export const setCurrentLesson = lessonName =>
  ({ type: SET_CURRENT_LESSON, lessonName });

export const initLesson = lesson => (dispatch, getState) => {
  let { code, steps } = lesson;
  dispatch(initCode(code.split('\n')));
  dispatch(initSteps(steps));
};

export const loadLessons = lessons => (dispatch, getState) => {
  dispatch(addLessons(lessons));
};

export const startLesson = () => (dispatch, getState) => {
  const { available, current } = getState().codeStep.lessons;
  if (current !== '__NONE__') {
    dispatch(initLesson(available[current]));
  }
};
