import * as types from './../constants/ActionTypes';

var initialState = {
	filterName : "",
	filterStatus : -1
};
const myReducer = (state=initialState,action) => {
		
	switch (action.type) {
		case types.FILTER_ITEM:
			return action.filter;
		default:
			return state;
	}
};

export default myReducer;