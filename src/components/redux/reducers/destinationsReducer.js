import {
  GET_POPULAR_DESTINATIONS,
  GET_VITAMIN_SEA,
  GET_DESTINATIONS,
  GET_NAIK_GUNUNG,
  GET_NATURE,
} from "../actions/actionTypes";

/* Initial state from store */

// setelah dapat API Destinasi jangan lupa untuk rename
const initState = {
  popularDestinations: [],
  vitaminSea: [],
  naikGunung: [],
  nature: [],
  destinations: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_POPULAR_DESTINATIONS:
      return {
        ...state,
        popularDestinations: action.payload.popularDestinations,
      };
    case GET_VITAMIN_SEA:
      return { ...state, vitaminSea: action.payload.vitaminSea };
    case GET_DESTINATIONS:
      return { ...state, destinations: action.payload.destinations };
    case GET_NAIK_GUNUNG:
      return { ...state, naikGunung: action.payload.naikGunung };
    case GET_NATURE:
      return { ...state, nature: action.payload.nature };
    /* Default return  */
    default:
      return state;
  }
}
