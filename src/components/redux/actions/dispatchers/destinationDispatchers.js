import {
  GET_POPULAR_DESTINATIONS,
  GET_VITAMIN_SEA,
  GET_DESTINATIONS,
  GET_NAIK_GUNUNG,
  GET_NATURE,
} from "../actionTypes";

const destinationsDispatchers = {
  getPopularDestinationsSuccess: (popularDestinations) => {
    return {
      type: GET_POPULAR_DESTINATIONS,
      payload: {
        popularDestinations,
      },
    };
  },

  getDestinationsSuccess: (destinations) => {
    return {
      type: GET_DESTINATIONS,
      payload: {
        destinations,
      },
    };
  },

  getVitaminSeaSuccess: (vitaminSea) => {
    return {
      type: GET_VITAMIN_SEA,
      payload: {
        vitaminSea,
      },
    };
  },

  getNaikGunungSuccess: (naikGunung) => {
    return {
      type: GET_NAIK_GUNUNG,
      payload: {
        naikGunung,
      },
    };
  },

  getNatureSuccess: (nature) => {
    return {
      type: GET_NATURE,
      payload: {
        nature,
      },
    };
  },
};

export default destinationsDispatchers;
