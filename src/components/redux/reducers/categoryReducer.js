import { GET_CATEGORY } from "../actions/actionTypes";

const initState = {
  getCategory: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case "GETCATEGORY":
      return {
        ...state,
        getCategory: action.payload.getCategory,
        loading: false,
      };

    /* Default return  */
    default:
      return state;
  }
}
