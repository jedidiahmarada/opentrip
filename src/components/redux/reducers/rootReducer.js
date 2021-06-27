import { combineReducers } from "redux";
// import loginReducer from "./loginReducer";
import moviesReducer from "./moviesReducer";

const rootReducer = combineReducers({
  // loginReducer,
  moviesReducer,
});

export default rootReducer;
