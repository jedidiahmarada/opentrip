import { data } from "@here/maps-api-for-javascript";
import { login as loginService } from "../services/userService";

export const loginStart = () => {
  return {
    type: "LOGIN_START",
  };
};

export const loginAction = (email, password, token) => {
  return {
    type: "LOGIN_SUCCES",
    payload: {
      email: email,
      password: password,
      token: token,
    },
  };
};

export const loginError = (errorMessage) => ({
  type: "LOGIN_ERROR",
  payload: {
    errorMessage,
  },
});

export const loginAsync = (email, password, history) => {
  return (dispatch) => {
    dispatch(loginStart());
    // const username = getState().user.username;
    // ^^ misal mau ambil username dari state di redux
    const store = window.localStorage;
    loginService(email, password)
      .then((response) => {
        console.log(response);
        store.setItem("token", response.data.token_traveller);
        dispatch(loginAction(email, password, response.data.token_traveller));
        history.push("/");
      })
      .catch((error) => {
        console.log(error, "error~");
        dispatch(loginError("Periksa kembali email dan password anda!"));
      });
  };
};
