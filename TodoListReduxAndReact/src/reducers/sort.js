import * as types from './../constants/ActionTypes';

var initialState = {
	categories : '',
	orderBy : 0
};

const myReducer = (state=initialState, action) => {

	switch(action.type) {
		case types.SORT_ITEM:
			return action;
		default:
			return state;
	}
};

export default myReducer;