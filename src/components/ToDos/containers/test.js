import React, { Component } from 'react';

import ToDos from 'components/ToDos';

class MyTodos extends Component {
	state = {
		toDoList: [
			{ id: 1, text: 'ToDo number 1' },
			{ id: 2, text: 'ToDo number 2' },
			{ id: 3, text: 'ToDo number 3' },
			{ id: 4, text: 'ToDo number 4' }
		]
	}

	render() {
		return (
			<ToDos list={this.state.toDoList} />
		);
	}
};

export default MyTodos;