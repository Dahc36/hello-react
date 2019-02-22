import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ onAdd, onSub }) => {
	return (
		<div>
			<button onClick={onSub} >- 1</button>
			<button onClick={onAdd} >+ 1</button>
		</div>
	);
};

Buttons.propTypes = {
	onAdd: PropTypes.func.isRequired,
	onSub: PropTypes.func.isRequired
};

export default Buttons;