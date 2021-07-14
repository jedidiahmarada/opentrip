const initialState = {
  username: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  identity_no: "",
  identity_pic: "",
  selfie_identity_pic: "",
  bank: "",
  account_number: "",
  book_account_pic: "",
  loading: false,
  error: false,
  errorMessage: "",
};

const hostRegisReducer = (state = initialState, action) => {
  switch (action.type) {
    case "H_REGIS_START": {
      return {
        ...state,
        loading: true,
      };
    }
    case "H_REGIS_SUCCES":
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        phone: action.payload.phone,
        address: action.payload.address,
        identity_no: action.payload.identity_no,
        identity_pic: action.payload.identity_pic,
        selfie_identity_pic: action.payload.selfie_identity_pic,
        bank: action.payload.book,
        account_number: action.payload.account_number,
        book_account_pic: action.payload.book_account_pic,
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

export default hostRegisReducer;
