import axios from "axios";
import destinationsDispatchers from "./dispatchers/destinationDispatchers";

const url = "https://api.themoviedb.org/3/movie/";
const apiKey = "26b6f99577e56d992ffe47051578e1ac";

const urlAllTrip =
  "https://fp-open-trip.herokuapp.com/api/ot/trip/all?page=0&limit=9";

const destinationsActions = {
  getPopularDestinations: () => {
    return async (dispatch) => {
      await axios
        .get(`${url}popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => {
          let popularDestinations = res.data.results;
          dispatch(
            destinationsDispatchers.getPopularDestinationsSuccess(
              popularDestinations
            )
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  getVitaminSea: () => {
    return async (dispatch) => {
      await axios
        .get(`${url}top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => {
          let vitaminSea = res.data.results;
          dispatch(destinationsDispatchers.getVitaminSeaSuccess(vitaminSea));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  getNaikGunung: () => {
    return async (dispatch) => {
      await axios
        .get(`${url}upcoming?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => {
          let naikGunung = res.data.results;
          dispatch(destinationsDispatchers.getNaikGunungSuccess(naikGunung));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  // getDestinations: (id) => {
  //   return async (dispatch) => {
  //     await axios
  //       .get(`${url}${id}?api_key=${apiKey}&language=en-US`)
  //       .then((res) => {
  //         let destinations = res.data;
  //         dispatch(
  //           destinationsDispatchers.getDestinationsSuccess(destinations)
  //         );
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  // },

  getNature: (id) => {
    return async (dispatch) => {
      await axios
        .get(`${url}${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => {
          let nature = res.data.results;
          dispatch(destinationsDispatchers.getNatureSuccess(nature));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  getAllDestination: (page) => {
    return async (dispatch) => {
      await axios
        .get(`${url}top_rated?api_key=${apiKey}&language=en-US&page=${page}`)
        .then((res) => {
          let destinations = res.data.results;
          dispatch(
            destinationsDispatchers.getDestinationsSuccess(destinations)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
};

export default destinationsActions;
