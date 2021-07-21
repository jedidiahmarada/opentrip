import { GET_CATEGORY } from "../actionTypes";

const categoryDispatchers = {
  getTripSuccess: (category) => {
    return {
      type: GET_CATEGORY,
      payload: {
        category,
      },
    };
  },
};
export default categoryDispatchers;
