import { GET_TRIP } from "../actions/actionTypes";

const initState = {
  getTrip: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case "GETTRIP":
      return {
        ...state,
        getTrip: action.payload.getTrip,
        loading: false,
      };

    /* Default return  */
    default:
      return state;
  }
}
