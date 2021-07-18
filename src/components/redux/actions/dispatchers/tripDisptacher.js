import { GET_TRIP } from "../actionTypes";

const tripDispatchers = {
  getTripSuccess: (trip) => {
    return {
      type: GET_TRIP,
      payload: {
        trip,
      },
    };
  },
};
export default tripDispatchers;
