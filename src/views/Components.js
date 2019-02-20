import React from 'react';

import StandardCounter from 'components/StandardComponents/Counter';
import ReduxCounter from 'components/ReduxComponents/Counter';

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