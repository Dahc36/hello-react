import { connect } from 'react-redux'

import { multValue, divValue } from 'redux/actionCreators';
import Counter from 'components/Counter';

const mapStateToProps = (state) => ({
	counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
	onAdd: () => {
		dispatch(multValue(3));
	},
	onSub: () => {
		dispatch(divValue(3));
	},
	subText: 'Dividido en 3',
	addText: 'Multiplicado por 3'
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);