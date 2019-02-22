import React, { Component } from 'react';

import Counter from 'components/Counter';

class AddSub extends Component {
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
				<Counter
					counter={this.state.counter}
					onAdd={this.handleAdd}
					onSub={this.handleSub} />
			</div>
		);
	}
}

export default AddSub;