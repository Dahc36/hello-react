import React from 'react';
import PropTypes from 'prop-types';

import Buttons from './Buttons';
import Display from './Display';

const Counter = ({ counter, onAdd, onSub, text }) => {
	return (
		<div>
			<Display counter={counter} text={text} />
			<Buttons onAdd={onAdd} onSub={onSub} />
		</div>
	);
}

Counter.propTypes = {
	counter: PropTypes.number.isRequired,
	onAdd: PropTypes.func.isRequired,
	onSub: PropTypes.func.isRequired,
	text: PropTypes.string
};

Counter.defaultProps = {
	text: 'Contador'
};

export default Counter;