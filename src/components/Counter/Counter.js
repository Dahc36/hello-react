import React from 'react';

import Buttons from './Buttons';
import Display from './Display';

const Counter = (props) => {
	const handleAdd = () => {
		props.onAdd();
	}

	const handleSub = () => {
		props.onSub();
	}

	return (
		<div>
			<Display counter={props.counter} />
			<Buttons onAdd={handleAdd} onSub={handleSub} />
		</div>
	);
}

export default Counter;