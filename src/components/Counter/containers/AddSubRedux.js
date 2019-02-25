import { connect } from 'react-redux'

import { addValue, subValue } from 'redux/actionCreators';
import Counter from 'components/Counter';

const mapStateToProps = (state) => ({
	counter: state.counter,
	text: 'Contador redux'
});

const mapDispatchToProps = (dispatch) => ({
	onAdd: () => {
		dispatch(addValue(1));
	},
	onSub: () => {
		dispatch(subValue(1));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);