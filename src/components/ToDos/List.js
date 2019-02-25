import React from 'react';

import ToDo from './ToDo';

const List = ({ list }) => {
	const renderToDos = (toDos) => (
		toDos.map((toDo) => <ToDo text={toDo.text} key={toDo.id} />)
	);

	return (
		<div>
			<h2>List</h2>
			{renderToDos(list)}
		</div>
	);
};

export default List;