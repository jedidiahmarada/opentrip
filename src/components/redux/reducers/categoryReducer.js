const initState = {
  getCategory: [],
  getIdCategory: [],
  getFilterCategory: [],
  loading: true,
  error: false,
  errorMessage: "",
  checkedCategory: [1, 2, 3, 4],
};

export default function (state = initState, action) {
  switch (action.type) {
    //GET CATEGORY
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
        loading: false,
        error: true,
        errorMessage: "",
      };
    //==============================

    //GET ID CATEGORY
    case "GETIDCATEGORY":
      return {
        ...state,
        getIdCategory: action.payload.getIdCategory,
        // loading: false,
      };
    case "GETIDCATEGORYERROR":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: "",
      };
    //==============================

    //GET FILTER CATEGORY
    case "GETFILTERCATEGORY":
      return {
        ...state,
        getCategory: action.payload.getFilterCategory,
        loading: false,
      };
    case "GETFILTERCATEGORYERROR":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: "",
      };
    case "SETCHECKEDCATEGORY":
      if (!state.checkedCategory.includes(action.payload.checkedCategory)) {
        return {
          ...state,
          checkedCategory: [
            ...state.checkedCategory,
            action.payload.checkedCategory,
          ],
        };
      }
      const temp = state.checkedCategory.filter(
        (el) => el !== action.payload.checkedCategory
      );
      return {
        ...state,
        checkedCategory: temp,
      };

    //==============================
    /* Default return  */
    default:
      return state;
  }
}
