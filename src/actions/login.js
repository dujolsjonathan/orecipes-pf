// action types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_LOGGED = 'CHECK_LOGGED';

// action creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (logged, userData) => ({
  type: SAVE_USER,
  logged,
  userData,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});
