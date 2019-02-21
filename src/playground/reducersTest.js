// Actions
export const ADD_VALUE = 'ADD_VALUE';
export const SUB_VALUE = 'SUB_VALUE';

// Action generators
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

// Reducer
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