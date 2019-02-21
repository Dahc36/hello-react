import {
	ADD_VALUE,
	SUB_VALUE
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