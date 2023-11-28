// actions.js
export const SET_USER_NAME = 'SET_USER_NAME';

export const UserName = (userName) => ({
    type: SET_USER_NAME,
    payload: userName,
});
