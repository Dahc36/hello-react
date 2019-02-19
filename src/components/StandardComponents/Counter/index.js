import React, { Component } from 'react';

import Buttons from './Buttons';
import Display from './Display';

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
				<Display counter={this.state.counter} />
				<Buttons onAdd={this.handleAdd} onSub={this.handleSub} />
			</div>
		);
	}
}

export default Counter;