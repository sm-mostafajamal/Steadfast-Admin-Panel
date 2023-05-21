import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobReducer";

const reducer = combineReducers({
  jobs: jobReducer,
});
const store = configureStore({
  reducer,
});

export default store;
