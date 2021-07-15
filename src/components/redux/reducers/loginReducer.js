const store = window.localStorage;
const token = store.getItem("token") || "";
const initialState = {
  email: "",
  password: "",
  token,
  loading: false,
  error: false,
  errorMessage: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START": {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
    }
    case "LOGIN_SUCCES":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token,
        loading: false,
      };
    case "LOGIN_ERROR": {
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

export default loginReducer;
