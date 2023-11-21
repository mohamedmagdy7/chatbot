import { combineReducers } from "redux";

import loader from "./Loader/reducers";
import snackbar from "./Snackbar/reducers";

export default combineReducers({
  loader,
  snackbar
});
