import { GET_BANK } from "../actionTypes";

const bankDispatchers = {
  getBankSuccess: (bank) => {
    return {
      type: GET_BANK,
      payload: {
        bank,
      },
    };
  },
};
export default bankDispatchers;
