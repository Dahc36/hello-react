import React from 'react';

import StandardCounter from 'containers/Counter/AddSub';
import ReduxCounter from 'containers/Counter/AddSubRedux';
import ToDos from 'components/ToDos/ToDos';

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