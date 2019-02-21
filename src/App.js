import React, { Component } from 'react';

import Components from 'views/Components';

import store from 'playground/reduxTest';
import { addValue, subValue } from 'playground/reducersTest';

console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(addValue(1));
store.dispatch(addValue(-1));
store.dispatch(subValue(34));
store.dispatch(subValue(-134));

// Stop listening to state updates
unsubscribe();

class App extends Component {
	render() {
		return (
			<div>
				<Components />
			</div>
		);
	}
}

export default App;
