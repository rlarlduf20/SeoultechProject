import { combineReducers } from "redux";
import emailSuccessReducer from "./email";

const reducer = combineReducers({
  email: emailSuccessReducer,
});

export default reducer;
