import store from "../../store";
import {
  showHideLoader,
  showHideSmallLoader
} from "../../store/Loader/actions";

export const isHandlerEnabled = (config = {}) => {
  return Object.prototype.hasOwnProperty.call(
    config,
    "handlerEnabled"
  ) && !config.handlerEnabled
    ? false
    : true;
};

// This is used to handle remove loader only if all pending requests are resolved
let numberOfAjaxCAllPending = 0;

export const requestHandler = (request) => {
  numberOfAjaxCAllPending++;
  if (isHandlerEnabled(request)) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user?.token;
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return request;
};

export const successHandler = (response) => {
  numberOfAjaxCAllPending--;
  if (isHandlerEnabled(response)) {
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(showHideLoader(false));
      store.dispatch(showHideSmallLoader(false));
    }
  }
  return response;
};

export const errorHandler = (error) => {
  numberOfAjaxCAllPending--;
  if (isHandlerEnabled(error.config)) {
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(showHideLoader(false));
      store.dispatch(showHideSmallLoader(false));
    }
  }
  return Promise.reject({ ...error });
};
