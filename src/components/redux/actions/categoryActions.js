import { getCategoryService } from "../services/userService";

export const getCategory = (getCategory) => {
  return {
    type: "GETCATEGORY",
    payload: { getCategory },
  };
};

export const getCategoryLoad = () => {
  return {
    type: "GETCATEGORYLOAD",
  };
};

export const getCategoryError = (errorMessage) => {
  return {
    type: "GETCATEGORYERROR",
    payload: { errorMessage },
  };
};

export const getCategoryAsync = () => {
  return (dispatch) => {
    dispatch(getCategoryLoad());
    getCategoryService()
      .then((response) => {
        console.log(response);
        dispatch(getCategory(response.data.result));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getCategoryError(error.message));
      });
  };
};
