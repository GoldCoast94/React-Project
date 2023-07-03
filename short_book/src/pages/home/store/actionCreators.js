import axios from 'axios';
import { constants } from './index';

const changeHomeData = (result) => {
	return {
		type: constants.CHANGE_HOME_DATA,
		topicList: result.topicList,
		recommendList: result.recommendList,
		articleList: result.articleList
	}
}

const addMoreList = (result, nextPage) => {
	return {
		type: constants.ADD_LIST,
		data: result,
		nextPage
	}
};

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changeHomeData(result));
		}).catch((error) => {
			console.log(error);
		});
	}
};

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addMoreList(result, page + 1));
		}).catch((err) => {
			console.log(err);
		});
	}
};

export const changeScrollShow = (show) => ({
	type: constants.CHANGE_SCROLL_SHOW,
	show
});