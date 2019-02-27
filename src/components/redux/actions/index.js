import { SET_HEIGHT, SIGN_IN, SIGN_OUT } from './types';

export const setHeight = action => {
  return {
    type: SET_HEIGHT,
    payload: action
  };
};
