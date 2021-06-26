const initialState = {
  username: null,
  token: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
      };
  }
};

export default loginReducer;
