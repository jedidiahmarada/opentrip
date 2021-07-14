import axios from "axios";
import bankDispatchers from "./dispatchers/bankDispatcher";

const url = "https://fp-open-trip.herokuapp.com/api/ot/bank/all";
const apiKey =
  "2eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlX2lkIjoxLCJlbWFpbCI6ImFmQGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6IkFkZSBGaXJtYW4iLCJpYXQiOjE2MjUxODQ3MzQsImV4cCI6MTYyNTE5NTUzNH0._BPK1GO-rsLEwmvYo5UdESDZEMIXMZ5A5CK-Wg_GzOo";

const bankActions = {
  getBank: () => {
    return async (dispatch) => {
      await axios
        .get(`${url}bank?api_key=${apiKey}`)
        .then((res) => {
          let bank = res.data.results;
          dispatch(bankDispatchers.getBankSuccess(bank));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
};
