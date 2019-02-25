import React from 'react';

import StandardCounter from 'components/Counter/containers/AddSub';
import ReduxCounter from 'components/Counter/containers/AddSubRedux';
import ReduxCounterJRG from 'components/Counter/containers/multDivSubRedux';

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