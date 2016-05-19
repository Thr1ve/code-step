import { deepAssign } from 'lib';

export const SET_SCOPES = 'SET_SCOPES';
export const setScopes = scopesObj =>
  ({ type: SET_SCOPES, scopesObj });

export function processScopes(steps) {
  let scopes = {};
  return steps.reduce((prev, cur) => {
    scopes = deepAssign(scopes, cur.scopes || {});
    prev.push({ ...cur, scopes });
    return prev;
  }, []);
}
