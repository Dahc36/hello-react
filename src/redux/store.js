import { combineReducers, createStore  } from 'redux';
import { counter } from './reducers';


let combinedReducer = combineReducers({
	counter
});

let store = createStore(combinedReducer);

export default store;