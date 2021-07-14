import { GET_BANK } from "../actions/actionTypes";

const initState = {
  bank_name: [],
};

export default function (state = initState, action) {
  console.log(action.type);
  console.log(GET_BANK);
  console.log(action.type == GET_BANK);
  switch (action.type) {
    case GET_BANK:
      return {
        ...state,
        bank: action.payload.bank,
      };

    /* Default return  */
    default:
      return state;
  }
}
