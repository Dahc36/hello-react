import React from 'react';

const CounterDisplay = (props) => {
	return (
		<div>
			<h1>{props.counter}</h1>
		</div>
	);
};

export default CounterDisplay;