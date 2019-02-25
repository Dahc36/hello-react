import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ onSub, onAdd, onSubText, onAddText }) => {
	return (
		<div>
			<button onClick={onSub} >{onSubText}</button>
			<button onClick={onAdd} >{onAddText}</button>
		</div>
	);
};

Buttons.propTypes = {
	onAdd: PropTypes.func.isRequired,
	onSub: PropTypes.func.isRequired
};

export default Buttons;