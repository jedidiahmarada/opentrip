import { login as loginService } from "../services/userService";

export const loginStart = () => {
  return {
    type: "LOGIN_START",
  };
};

export const loginAction = (email, password) => {
  return {
    type: "LOGIN",
    payload: {
      email: email,
      password: password,
    },
  };
};

export const loginError = (errorMessage) => ({
  type: "LOGIN_ERROR",
  payload: {
    errorMessage,
  },
});

export const loginAsync = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    // const username = getState().user.username;
    // ^^ misal mau ambil username dari state di redux
    loginService(email, password)
      .then((response) => {
        console.log(response);
        dispatch(loginService(email, password));
      })
      .catch((error) => {
        console.log(error, "error~");
        dispatch(loginError("3 PERIODE!!!"));
      });
  };
};
