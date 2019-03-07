import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from '@/reducers';
import pdfViewer from '@/redux/reducers/pdfViewer';

let store;
let combinedReducer = combineReducers({
  ...reducers,
  pdfViewer
});

let middleware = [ thunk ];

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

switch (process.env.NODE_ENV) {
  case 'production':
    store = createStore(combinedReducer);
  default:
    store = createStore(combinedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware)));
}

export default store;