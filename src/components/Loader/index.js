import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Loader = ({ children, loading }) => {
	return (
		loading ? (
			<div className="loader"></div>
		) : 
		children
	);
};

Loader.propTypes = {
	children: PropTypes.element.isRequired,
	loading: PropTypes.bool.isRequired
};

export default Loader;