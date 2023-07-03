import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes';
const defaultState = {
	inputValue: '',
	list: []
};


export default (state = defaultState, action) => {
	switch(action.type) {
		case INIT_LIST:
			const newState0 = JSON.parse(JSON.stringify(state));
			newState0.list = action.list;
			return newState0;
		case CHANGE_INPUT:
			const newState = JSON.parse(JSON.stringify(state));
			newState.inputValue = action.value;
			return newState;
		case ADD_ITEM:
			const newState1 = JSON.parse(JSON.stringify(state));
			newState1.list.push(newState1.inputValue);
			newState1.inputValue = '';
			return newState1;
		case DELETE_ITEM:
			const newState2 = JSON.parse(JSON.stringify(state));
			newState2.list.splice(action.index, 1);
			return newState2;
		default:
			return state;
	}
}