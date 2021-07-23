import { getOrderService } from "../services/userService";

// GET CATEGORY
export const getOrder = (getOrder) => {
  return {
    type: "GETORDER",
    payload: { getOrder },
  };
};

export const getOrderLoad = () => {
  return {
    type: "GETORDERLOAD",
  };
};

export const getOrderError = (errorMessage) => {
  return {
    type: "GETORDERERROR",
    payload: { errorMessage },
  };
};

export const getOrderAsync = () => {
  return (dispatch) => {
    dispatch(getOrderLoad());
    getOrderService()
      .then((response) => {
        console.log(response);
        dispatch(getOrder(response.data.result));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getOrderError(error.message));
      });
  };
};
//==================================
