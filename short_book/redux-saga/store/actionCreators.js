import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, INIT_LIST, GET_ORIGIN_LIST } from './actionTypes';

export const getChangeInput = (value) => {
	return {
		type: CHANGE_INPUT,
		value
	}
};
export const getAddItem = () => {
	return {
		type: ADD_ITEM
	}
};

export const getDeleteItem = (index) => {
	return {
		type: DELETE_ITEM,
		index
	}
};

export const getInitList = (list) => {
	return {
		type: INIT_LIST,
		list
	}
};

export const getOriginList= () => ({
	type: GET_ORIGIN_LIST
});

