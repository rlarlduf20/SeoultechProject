import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};
const store = createStore(
  persistReducer(persistConfig, reducer),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
