import { combineReducers } from "redux";
import travRegisReducer from "./travRegisReducer";
import hostRegisReducer from "./hostRegisReducer";
import loginReducer from "./loginReducer";
import destinationsReducer from "./destinationsReducer";

const rootReducer = combineReducers({
  hostRegisReducer,
  travRegisReducer,
  loginReducer,
  destinationsReducer,
});

export default rootReducer;
