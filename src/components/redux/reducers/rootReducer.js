import { combineReducers } from "redux";
import travRegisReducer from "./travRegisReducer";
import loginReducer from "./loginReducer";
import destinationsReducer from "./destinationsReducer";

const rootReducer = combineReducers({
  travRegisReducer,
  loginReducer,
  destinationsReducer,
});

export default rootReducer;
