import { combineReducers } from "redux";
import emailSuccessReducer from "./email";
import codeCheckReducer from "./code";
import userReducer from "./user";
import tokenReducer from "./token";

const reducer = combineReducers({
  email: emailSuccessReducer,
  code: codeCheckReducer,
  user: userReducer,
  token: tokenReducer,
});

export default reducer;
