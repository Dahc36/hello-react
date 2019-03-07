import {
  SET_FILE,
  FILE_LOADED,
  PAGE_LOADED,
  SET_PAGE_BUTTON,
  SET_PAGE_BUTTON_SUCCESS,
  SET_PAGE_SCROLL,
  SET_SCALE
} from '@/redux/actions';

export const setFile = (value) => ({
  type: SET_FILE,
  value
});

export const fileLoaded = (pagesTotal) => ({
  type: FILE_LOADED,
  pagesTotal
});

export const pageLoaded = () => ({ type: PAGE_LOADED });

export const setPageButton = (value) => ({
  type: SET_PAGE_BUTTON,
  value
});

export const setPageButtonSuccess = () => ({ type: SET_PAGE_BUTTON_SUCCESS });

export const setPageScroll = (value) => ({
  type: SET_PAGE_SCROLL,
  value
});

export const setScale = (value) => ({
  type: SET_SCALE,
  value
});