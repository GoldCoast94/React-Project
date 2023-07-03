import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { ListWrapper, ListItem, ListInfo, LoadMore } from '../style';

class List extends PureComponent {
	render() {
		const { articleList, getMoreList, page } = this.props;
		return (
			<ListWrapper>
			{
				articleList.map((item, index) => {
					return (
						<Link to={'/detail/' + item.get('id')} key={index} className='list-router'>
							<ListItem>
								<img className='list-pic' src={item.get('imgURL')} alt={item.get('title')} />
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						</Link>
					)
				})
			}
			<LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
			</ListWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	articleList: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(List);