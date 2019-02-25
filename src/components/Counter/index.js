import React from 'react';
import PropTypes from 'prop-types';

import Buttons from './Buttons';
import Display from './Display';

const Counter = (props) => {
	const { counter, onAdd, onSub, text, onSubText, onAddText } = props;
	return (
		<div>
			<Display counter={counter} text={text} />
			<Buttons onAdd={onAdd} onSub={onSub} onSubText={onSubText} onAddText={onAddText} />
		</div>
	);
}

Counter.propTypes = {
	counter: PropTypes.number.isRequired,
	onAdd: PropTypes.func.isRequired,
	onSub: PropTypes.func.isRequired,
	text: PropTypes.string,
	onSubText: PropTypes.string,
	onAddText: PropTypes.string
};

Counter.defaultProps = {
	text: 'Contador',
	onSubText: '-1',
	onAddText: '+1'
};

export default Counter;