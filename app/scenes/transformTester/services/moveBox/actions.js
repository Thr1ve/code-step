export const UPDATE_MOVEBOX_STATE = 'UPDATE_MOVEBOX_STATE';
export const updateMoveBoxState = (key, val) =>
  ({ type: UPDATE_MOVEBOX_STATE, key, val });
