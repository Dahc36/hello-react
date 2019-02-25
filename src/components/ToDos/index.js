import React from 'react';

import List from './List';

const ToDos = ({ list }) => {
	return (
		<div>
			<h2>ToDos</h2>
			<List list={list} />
		</div>
	);
};

export default ToDos;