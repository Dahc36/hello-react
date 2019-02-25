import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ onSub, onAdd, subText, addText }) => {
	return (
		<div>
			<button onClick={onSub} >{subText}</button>
			<button onClick={onAdd} >{addText}</button>
		</div>
	);
};

Buttons.propTypes = {
	onAdd: PropTypes.func.isRequired,
	onSub: PropTypes.func.isRequired
};

export default Buttons;