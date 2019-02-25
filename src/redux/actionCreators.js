import {
	ADD_VALUE,
	SUB_VALUE,
	MULT_VALUE,
	DIV_VALUE
} from './actions';

export const addValue = (value) => {
	return {
		type: ADD_VALUE,
		value
	};
};

export const subValue = (value) => {
	return {
		type: SUB_VALUE,
		value
	};
};

export const multValue = (value) => {
	return {
		type: MULT_VALUE,
		value
	};
};

export const divValue = (value) => {
	return {
		type: DIV_VALUE,
		value
	};
};

