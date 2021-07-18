import { getTripService } from "../services/userService";

export const getTrip = (getTrip) => {
  return {
    type: "GETTRIP",
    payload: { getTrip },
  };
};

export const getTripAsync = () => {
  return (dispatch) => {
    dispatch(getTrip());
    getTripService()
      .then((response) => {
        console.log(response);
        dispatch(getTrip(response.data.result));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getTrip(error.message));
      });
  };
};
