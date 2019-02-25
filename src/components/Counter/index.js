import React from 'react';
import PropTypes from 'prop-types';

import Buttons from './Buttons';
import Display from './Display';

const Counter = (props) => {
	const { counter, onAdd, onSub, text, subText, addText } = props;
	return (
		<div>
			<Display counter={counter} text={text} />
			<Buttons onAdd={onAdd} onSub={onSub} subText={subText} addText={addText} />
		</div>
	);
}

Counter.propTypes = {
	counter: PropTypes.number.isRequired,
	onAdd: PropTypes.func.isRequired,
	onSub: PropTypes.func.isRequired,
	text: PropTypes.string,
	subText: PropTypes.string,
	addText: PropTypes.string
};

Counter.defaultProps = {
	text: 'Contador',
	subText: '-1',
	addText: '+1'
};

export default Counter;