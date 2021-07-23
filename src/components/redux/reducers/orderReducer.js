const initState = {
  getOrder: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    //GET ORDER
    case "GETORDER":
      return {
        ...state,
        getOrder: action.payload.getOrder,
        loading: false,
      };
    case "GETORDERLOAD":
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
    case "GETORDERERROR":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: "",
      };
    //==============================
    /* Default return  */
    default:
      return state;
  }
}
