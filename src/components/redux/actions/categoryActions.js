import {
  getCategoryService,
  getIdCategoryService,
  getFilterCategoryService,
} from "../services/userService";

// GET CATEGORY
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
//==================================

//FILTER CATEGORY BY ID
export const getIdCategory = (getIdCategory) => {
  return {
    type: "GETIDCATEGORY",
    payload: { getIdCategory },
  };
};

export const getIdCategoryError = (errorMessage) => {
  return {
    type: "GETIDCATEGORYERROR",
    payload: { errorMessage },
  };
};

export const getIdCategoryAsync = (id) => {
  return (dispatch) => {
    getIdCategoryService(id)
      .then((response) => {
        console.log(response);
        dispatch(getIdCategory(response.data.result));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getIdCategoryError(error.message));
      });
  };
};

//FILTER CATEGORY
export const getFilterCategory = (getFilterCategory) => {
  return {
    type: "GETFILTERCATEGORY",
    payload: { getFilterCategory },
  };
};

export const getFilterCategoryError = (errorMessage) => {
  return {
    type: "GETFILTERCATEGORYERROR",
    payload: { errorMessage },
  };
};
export const getFilterCategoryAsync = (queryParams) => {
  return (dispatch) => {
    getFilterCategoryService(queryParams)
      .then((response) => {
        console.log(response);
        dispatch(getFilterCategory(response.data.result));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getFilterCategoryError(error.message));
      });
  };
};

//CATEGORY CHECKED
export const setCheckedCategory = (checkedCategory) => {
  return {
    type: "SETCHECKEDCATEGORY",
    payload: { checkedCategory },
  };
};
