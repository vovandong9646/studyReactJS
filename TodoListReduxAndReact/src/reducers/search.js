import * as type from './../constants/ActionTypes';

var initialState = "";

const myReducer = (state=initialState, action) => {
	switch(action.type) {
		case type.SEARCH_ITEM:
			return action.key;
		default:
			return state;
	}
};

export default myReducer;