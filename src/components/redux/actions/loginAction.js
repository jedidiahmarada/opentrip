import { login as loginService } from "../services/userService";

export const loginAction = (email, password) => {
  return {
    type: "LOGIN",
    payload: {
      email: email,
      password: password,
    },
  };
};

export const loginError = (error) => ({
  type: "LOGIN_ERROR",
  payload: {
    error,
  },
});

export const loginAsync = (email, password) => {
  return (dispatch, getState) => {
    // const username = getState().user.username;
    // ^^ misal mau ambil username dari state di redux
    loginService(email, password)
      .then((response) => {
        console.log(response);
        dispatch(loginService(email, password));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginError(error.message));
      });
  };
};
