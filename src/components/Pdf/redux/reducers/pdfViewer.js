import {
  SET_FILE,
  FILE_LOADED,
  PAGE_LOADED,
  SET_PAGE_BUTTON,
  SET_PAGE_BUTTON_SUCCESS,
  SET_PAGE_SCROLL,
  SET_SCALE
} from '@/redux/actions';

const initialSate = {
  documentLoading: true,
  file: null,
  page: 1,
  shouldScroll: false,
  pagesLoaded: 0,
  pagesTotal: -1,
  scale: 1
};

const pdfViewer = (state = initialSate, action) => {
  switch(action.type) {
    case SET_FILE:
      return {
        documentLoading: true,
        file: action.value,
        page: 1,
        shouldScroll: false,
        pagesLoaded: 0,
        pagesTotal: -1,
        scale: 1
      };
    case FILE_LOADED:
      return {
        ...state,
        documentLoading: false,
        pagesTotal: action.pagesTotal
      };
    case PAGE_LOADED:
      return {
        ...state,
        pagesLoaded: state.pagesLoaded + 1
      };
    case SET_PAGE_BUTTON:
      return {
        ...state,
        page: action.value,
        shouldScroll: true
      };
    case SET_PAGE_BUTTON_SUCCESS:
      return {
        ...state,
        shouldScroll: false
      };
    case SET_PAGE_SCROLL:
      return {
        ...state,
        page: action.value
      };
    case SET_SCALE:
      return {
        ...state,
        scale: action.value
      };
    default:
      return state;
  }
};

export default pdfViewer;