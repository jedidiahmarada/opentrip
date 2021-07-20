const initState = {
  getTrip: [],
  getTripId: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case "GETTRIP":
      return {
        ...state,
        getTrip: action.payload.getTrip,
        loading: false,
      };
    case "GETTRIPID":
      return {
        ...state,
        getTripId: action.payload.getTripId,
        loading: false,
      };

    /* Default return  */
    default:
      return state;
  }
}
