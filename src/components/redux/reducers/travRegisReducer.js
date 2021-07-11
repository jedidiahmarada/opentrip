const initialState = {
  username: "",
  email: "",
  password: "",
  loading: false,
  error: false,
  errorMessage: "",
};

const travRegisReducer = (state = initialState, action) => {
  switch (action.type) {
    case "T_REGIS_START": {
      return {
        ...state,
        loading: true,
      };
    }
    case "T_REGIS_SUCCES":
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        loading: false,
      };
    case "T_REGIS_ERROR": {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    }
    default:
      return { ...state };
  }
};

export default travRegisReducer;
