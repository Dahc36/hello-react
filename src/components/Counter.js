import React, { Component } from 'react';

import CounterButtons from './CounterButtons';
import CounterDisplay from './CounterDisplay';

class Counter extends Component {
	state = {
		counter: 0
	}

	handleAdd = () => {
		this.setState((state) => {
			return {
				counter: state.counter + 1
			};
		});
	}

	handleSub = () => {
		this.setState((state) => {
			return {
				counter: state.counter - 1
			};
		});
	}

	render() {
		return (
			<div>
				<h1>React components</h1>
				<CounterDisplay counter={this.state.counter} />
				<CounterButtons onAdd={this.handleAdd} onSub={this.handleSub} />
			</div>
		);
	}
}

export default Counter;