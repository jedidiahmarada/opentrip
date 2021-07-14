import { hostRegis as hostRegisService } from "../services/userService";

export const hostRegisStart = () => {
  return {
    type: "H_REGIS_START",
  };
};

export const hostRegisAction = (
  username,
  email,
  password,
  phone,
  address,
  identity_no,
  identity_pic,
  selfie_identity_pic,
  bank,
  account_number,
  book_account_pic
) => {
  return {
    type: "H_REGIS_SUCCES",
    payload: {
      username: username,
      email: email,
      password: password,
      phone: phone,
      address: address,
      identity_no: identity_no,
      identity_pic: identity_pic,
      selfie_identity_pic: selfie_identity_pic,
      bank: bank,
      account_number: account_number,
      book_account_pic: book_account_pic,
    },
  };
};

export const hostRegisError = (errorMessage) => ({
  type: "H_REGIS_ERROR",
  payload: {
    errorMessage,
  },
});

export const hostRegisAsync = (
  username,
  email,
  password,
  phone,
  address,
  identity_no,
  identity_pic,
  selfie_identity_pic,
  bank,
  account_number,
  book_account_pic
) => {
  return (dispatch) => {
    dispatch(hostRegisStart());
    // const username = getState().user.username;
    // ^^ misal mau ambil username dari state di redux
    hostRegisService(
      username,
      email,
      password,
      phone,
      address,
      identity_no,
      identity_pic,
      selfie_identity_pic,
      bank,
      account_number,
      book_account_pic
    )
      .then((response) => {
        console.log(response, "berhasil~");
        dispatch(
          hostRegisAction(
            username,
            email,
            password,
            phone,
            address,
            identity_no,
            identity_pic,
            selfie_identity_pic,
            bank,
            account_number,
            book_account_pic
          )
        );
      })
      .catch((error) => {
        console.log(error, "error~");
        dispatch(hostRegisError(error));
      });
  };
};
