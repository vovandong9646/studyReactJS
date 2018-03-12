import { combineReducers } from 'redux';
import tasks from './tasks.js';
import displayForm from './displayForm.js';
import taskEdit from './taskEdit.js';
import filter from './filter.js';
import search from './search.js';
import sort from './sort.js';

const myReducer = combineReducers({
	tasks,
	displayForm,
	taskEdit,
	filter,
	search,
	sort
});


export default myReducer;