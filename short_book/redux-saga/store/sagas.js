import { put, takeEvery } from 'redux-saga/effects';
import { GET_ORIGIN_LIST } from './actionTypes';
import { getInitList } from './actionCreators';
import axios from 'axios';

function* fetchUser(){
	try{
		const res = yield axios.get('/api/list.json');
		const action = getInitList(res.data);
		yield put(action);
	}catch(e) {
		console.log('网络请求失败');
	}
}

function* mySaga() {
	yield takeEvery(GET_ORIGIN_LIST, fetchUser);
}

export default mySaga;