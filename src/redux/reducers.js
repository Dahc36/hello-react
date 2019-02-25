import {
	ADD_VALUE,
	SUB_VALUE,
	MULT_VALUE,
	DIV_VALUE
} from './actions';

export const counter = (state = 1, action) => {
	switch (action.type) {
		case ADD_VALUE:
			return state + action.value;
		case SUB_VALUE:
			return state - action.value;
		case MULT_VALUE:
			return state * action.value;
		case DIV_VALUE:
			return state / action.value;
		default:
			return state;
	}
};