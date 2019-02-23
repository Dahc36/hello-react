import React from 'react';

import './index.css';

const Loader = (loading) => (Component) => {
	if(Component) {
		return (
			loading ? (
				<div className="loader"></div>
			) : (
				<Component />
			)
		);
	} else {
		throw ('Error: Loader needs component argument')
	}
};

export default Loader;