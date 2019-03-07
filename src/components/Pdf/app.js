import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import store from '@/redux/store';
import Root from './screens/Root';
// import { createInitAction } from './actions';

import Playground from '@/playground';

// store.dispatch(createInitAction());

ReactDOM.render(
  <Provider store={store}>
    {/*<Root/>*/}
    <Playground />
  </Provider>
  , document.getElementById('ROOT')
);

