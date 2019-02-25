import React from 'react';

import './index.css';

const Loader = (loading, props) => (Component) => {
	if(Component) {
		return (
			loading ? (
				<div className="loader"></div>
			) : (
				<Component {...props} />
			)
		);
	} else {
		throw new Error('Loader needs the Component argument');
	}
};

export default Loader;