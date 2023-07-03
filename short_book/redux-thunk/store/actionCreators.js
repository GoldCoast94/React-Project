import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes';
import axios from 'axios';

export const getChangeInput = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    };
};
export const getAddItem = () => {
    return {
        type: ADD_ITEM
    };
};

export const getDeleteItem = (index) => {
    return {
        type: DELETE_ITEM,
        index
    };
};

export const getInitList = (list) => {
    return {
        type: INIT_LIST,
        list
    };
};

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/list.json').then((res) => {
            const result = res.data;
            dispatch(getInitList(result));
        });
    }
}

