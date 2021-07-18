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
        if (response.code == 400) {
          dispatch(travRegisError(response.message));
        } else {
          dispatch(travRegisAction(username, email, password));
        }
        console.log(response, "nih respone nih ");
      })
      .catch((response) => {
        console.log(response.message, "error~");
        dispatch(travRegisError(response.message));
      });
  };
};

//BERSAHABATLAH DENGAN INI SEMUA AGAR JALAN MENJADI MUDAH
