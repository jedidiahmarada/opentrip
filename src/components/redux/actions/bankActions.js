import { getBankService } from "../services/userService";

export const getBank = (getBank) => {
  return {
    type: "GETBANK",
    payload: { getBank },
  };
};

export const getBankAsync = () => {
  return (dispatch) => {
    dispatch(getBank());
    getBankService()
      .then((response) => {
        console.log(response);
        dispatch(getBank(response.data.result));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getBank(error.message));
      });
  };
};
