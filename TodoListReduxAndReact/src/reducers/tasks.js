import * as types from './../constants/ActionTypes';

var rand = () => {
	return Math.floor((Math.random() + 1) * 0x100000).toString(16);
}

var randomId = () => {
	var rd = rand() + "-" + rand() + "-" + rand() + "-" + rand() + "-" + rand() + "-" + rand() + "-" + rand();
	return rd;
}

var data = JSON.parse(localStorage.getItem('tasks'));

var findIndex = (tasks, id) => {
	var result = -1;
	tasks = tasks.map((task, index) => {
		if(task.id === id) {
			result = index;
		}
	});
	return result;
};

var initialState = data ? data : [];

const myReducer = (state=initialState, action) => {
	switch (action.type) {
		case types.LIST_ALL: 
			return state;
		case types.SAVE_TASK:
			var task = {
				id : action.task.id,
				name: action.task.name,
				status: action.task.status
			}
			if(task.id !== '') {
				// edit
				var index = findIndex(state,task.id);
				if(index !== -1) {
					state[index]= task;
				}
			} else {
				task.id = randomId();
				state.push(task);
			}
			// luu vao localStorage.
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.DELETE_ITEM:
			var id = action.idTask;
			index = findIndex(state,id);
			if(index !== -1) {
				state.splice(index, 1);
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		default: 
			return state;
	}
}

export default myReducer;