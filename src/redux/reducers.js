import {
	ADD_VALUE,
	SUB_VALUE
} from './actions';

export const counter = (state = 0, action) => {
	switch (action.type) {
		case ADD_VALUE:
			return state + action.value;
		case SUB_VALUE:
			return state - action.value;
		default:
			return state;
	}
};