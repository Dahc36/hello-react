import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ counter, text }) => {
	return (
		<div>
			<h2>{text}: {counter}</h2>
		</div>
	);
};

Display.propTypes = {
	counter: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
};

export default Display;