import React from 'react';

const CounterButtons = ({ onAdd, onSub }) => {
	return (
		<div>
			<button onClick={onSub} >- 1</button>
			<button onClick={onAdd} >+ 1</button>
		</div>
	);
};

export default CounterButtons;