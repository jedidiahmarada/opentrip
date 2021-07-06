import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import destinationsReducer from "./destinationsReducer";

const rootReducer = combineReducers({
  loginReducer,
  destinationsReducer,
});

export default rootReducer;
