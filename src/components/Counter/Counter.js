import React from 'react';

import Buttons from './Buttons';
import Display from './Display';

const Counter = ({ counter, onAdd, onSub}) => {
	const handleAdd = () => {
		onAdd();
	}

	const handleSub = () => {
		onSub();
	}

	return (
		<div>
			<Display counter={counter} />
			<Buttons onAdd={handleAdd} onSub={handleSub} />
		</div>
	);
}

export default Counter;