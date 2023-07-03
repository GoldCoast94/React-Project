import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
			})
		case constants.ADD_LIST:
			return state.merge({
				articleList: state.get('articleList').concat(fromJS(action.data)),
				articlePage: action.nextPage
			})
		case constants.CHANGE_SCROLL_SHOW:
			return state.set('showScroll', action.show);
		default:
			return state;
	}
};