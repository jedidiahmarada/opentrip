import { travRegis as travRegisService } from "../services/userService";

export const travRegisStart = () => {
  return {
    type: "T_REGIS_START",
  };
};

export const travRegisAction = (username, email, password) => {
  return {
    type: "T_REGIS_SUCCES",
    payload: {
      username: username,
      email: email,
      password: password,
    },
  };
};

export const travRegisError = (errorMessage) => ({
  type: "T_REGIS_ERROR",
  payload: {
    errorMessage,
  },
});

export const travRegisAsync = (username, email, password) => {
  return (dispatch) => {
    dispatch(travRegisStart());
    // const username = getState().user.username;
    // ^^ misal mau ambil username dari state di redux
    travRegisService(username, email, password)
      .then((response) => {
        console.log(response, "berhasil~");
        dispatch(travRegisAction(username, email, password));
      })
      .catch((error) => {
        console.log(error, "error~");
        dispatch(travRegisError(error));
      });
  };
};
