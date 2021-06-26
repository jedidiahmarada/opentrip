export const loginAction = (username, token) => {
  return {
    type: "LOGIN",
    payload: {
      username,
      token,
    },
  };
};
