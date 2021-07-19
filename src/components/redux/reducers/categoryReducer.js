import { GET_CATEGORY } from "../actions/actionTypes";

const initState = {
  getCategory: [],
  loading: true,
  error: false,
  errorMessage: "",
};

export default function (state = initState, action) {
  switch (action.type) {
    case "GETCATEGORY":
      return {
        ...state,
        getCategory: action.payload.getCategory,
        loading: false,
      };
    case "GETCATEGORYLOAD":
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
    case "GETCATEGORYERROR":
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };

    /* Default return  */
    default:
      return state;
  }
}
