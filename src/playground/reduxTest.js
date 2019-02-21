import { combineReducers, createStore  } from 'redux';
import { counter } from './reducersTest';


let app = combineReducers({
	counter
});

let store = createStore(app);

export default store;