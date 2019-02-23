import React from 'react';

import StandardCounter from 'components/Counter/containers/AddSub';
import ReduxCounter from 'components/Counter/containers/AddSubRedux';
import ToDos from 'components/ToDos/containers/test';

const Components = () => {
	return (
		<div>
			<h1>Components</h1>
			<StandardCounter />
			<ReduxCounter />
			<ToDos />
		</div>
	);
};

export default Components;