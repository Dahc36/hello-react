import React from 'react';

import StandardCounter from 'components/Counter/CounterContainer';
import ReduxCounter from 'components/Counter/CounterReduxContainer';

const Components = () => {
	return (
		<div>
			<h1>Components</h1>
			<StandardCounter />
			<ReduxCounter />
		</div>
	);
};

export default Components;