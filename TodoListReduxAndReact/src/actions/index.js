import * as types from './../constants/ActionTypes';

export const ListAll = () => {
	return{
		type : types.LIST_ALL
	}
};

export const saveTask = (task) => {
	return{
		type : types.SAVE_TASK,
		task : task
	}
};

export const toggleForm = () => {
	return {
		type : types.TOGGLE_FORM
	}
};

export const closeForm = () => {
	return {
		type : types.CLOSE_FORM
	}
};

export const openForm = () => {
	return {
		type : types.OPEN_FORM
	}
};

export const deleteTask = (id) => {
	return {
		type : types.DELETE_ITEM,
		idTask : id
	}
};

export const updateTask = (task) => {
	return {
		type : types.UPDATE_TASK,
		task
	}
};

export const filterTask = (filter) => {
	return {
		type : types.FILTER_ITEM,
		filter
	}
};

export const searchItem = (key) => {
	return {
		type : types.SEARCH_ITEM,
		key
	}
};

export const sortItem = (categories,orderBy) => {
	return {
		type : types.SORT_ITEM,
		categories,
		orderBy
	}
};