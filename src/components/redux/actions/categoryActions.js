import { getCategoryService } from "../services/userService";

export const getCategory = (getCategory) => {
  return {
    type: "GETCATEGORY",
    payload: { getCategory },
  };
};

export const getCategoryAsync = () => {
  return (dispatch) => {
    dispatch(getCategory());
    getCategoryService()
      .then((response) => {
        console.log(response);
        dispatch(getCategory(response.data.result));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getCategory(error.message));
      });
  };
};
