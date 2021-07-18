import { combineReducers } from "redux";
import travRegisReducer from "./travRegisReducer";
import hostRegisReducer from "./hostRegisReducer";
import loginReducer from "./loginReducer";
import destinationsReducer from "./destinationsReducer";
import bankReducer from "./bankReducer";
import tripReducer from "./tripReducer";

const rootReducer = combineReducers({
  hostRegisReducer,
  travRegisReducer,
  loginReducer,
  bankReducer,
  tripReducer,
  destinationsReducer,
});

export default rootReducer;
