import React from 'react';

import StandardCounter from 'components/Counter/CounterContainer';
import ReduxCounter from 'components/Counter/CounterReduxContainer';
import ReduxCounterJRG from 'components/Counter/CounterReduxContainerJRG';

const Components = () => {
	return (
		<div>
			<h1>Components</h1>
			<StandardCounter />
			<ReduxCounter />
			<ReduxCounterJRG />
		</div>
	);
};

export default Components;