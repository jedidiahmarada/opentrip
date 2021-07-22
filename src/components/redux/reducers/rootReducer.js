import { combineReducers } from "redux";
import travRegisReducer from "./travRegisReducer";
import hostRegisReducer from "./hostRegisReducer";
import loginReducer from "./loginReducer";
import bankReducer from "./bankReducer";
import tripReducer from "./tripReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  hostRegisReducer,
  travRegisReducer,
  loginReducer,
  bankReducer,
  tripReducer,
  categoryReducer,
});

export default rootReducer;
