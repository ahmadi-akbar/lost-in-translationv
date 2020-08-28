//Types
export const ACTION_SET_USER = 'ACTION_SET_USER';

//Actions
export const setAuth = (
  auth = {
    isLoggedIn: false,
    name: '',
  }
) => ({
  type: ACTION_SET_USER,
  payload: auth,
});
