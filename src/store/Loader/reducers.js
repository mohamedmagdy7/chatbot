import * as types from "./types";

const INITIAL_STATE = {
  loader: false,
  smallLoader: false
};

const loader = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_HIDE_LOADER:
      return { ...state, loader: action.payload };
    case types.SHOW_HIDE_SMALL_LOADER:
      return { ...state, smallLoader: action.payload };
    default:
      return state;
  }
};

export default loader;
