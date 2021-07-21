import { getTripService } from "../services/userService";
import { getTripIdService } from "../services/userService";

//GET ALL TRIP + PAGINATION
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

//GET TRIP BY_ID
export const getTripId = (getTripId) => {
  return {
    type: "GETTRIPID",
    payload: { getTripId },
  };
};

export const getTripIdAsync = (id) => {
  return (dispatch) => {
    // dispatch(getTripId());
    getTripIdService(id)
      .then((response) => {
        console.log(response);
        dispatch(getTripId(response.data.result));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getTripId(error.message));
      });
  };
};
