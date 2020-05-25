import { combineReducers } from "redux";
import adminReducers from "./admin";
import bookReducers from "./book";

const reducers = combineReducers({
  admin: adminReducers,
  book: bookReducers
});

export default reducers;
