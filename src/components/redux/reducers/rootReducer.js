import destinationsReducer from "./destinationsReducer";
import authReducer from "./userReducer/auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authReducer,
  destinationsReducer,
});

export default rootReducer;
