import { deepAssign } from 'lib';

export const SET_SCOPES = 'SET_SCOPES';
export const setScopes = scopesObj =>
  ({ type: SET_SCOPES, scopesObj });

export function processScopes(steps) {
  let context = {};
  return steps.map((step) => {
    if (typeof step.scopes === 'function') {
      step.scopes.call(context);
    }

    return { ...step, scopes: deepAssign({}, context) };
  });
}
