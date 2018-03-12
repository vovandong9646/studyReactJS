import * as types from './../constants/ActionTypes';

var initialState = {
	id: "",
	name: "",
	status: true
};
const myReducer = (state=initialState,action) => {
		
	switch (action.type) {
		case types.UPDATE_TASK:
			return action.task;
		default:
			return state;
	}
};

export default myReducer;