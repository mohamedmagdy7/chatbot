import * as types from "./types";

export const showHideLoader = (payload) => ({
  type: types.SHOW_HIDE_LOADER,
  payload
});

export const showHideSmallLoader = (payload) => ({
  type: types.SHOW_HIDE_SMALL_LOADER,
  payload
});
