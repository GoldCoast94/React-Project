import React, { PureComponent, Fragment } from 'react';
import Topic from './components/Topic';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style';

class Home extends PureComponent{

	handleScrollTop() {
		window.scrollTo(0,0);
	}

	render() {
		const imgSrc = 'http://5b0988e595225.cdn.sohucs.com/images/20180913/2d8fba67fc654ec4b929b65c89a3ef56.jpeg';
		return (
			<Fragment>
				<HomeWrapper>
					<HomeLeft>
						<img className='banner-image' src={imgSrc} alt="Greece"/>
						<Topic></Topic>
						<List></List>
					</HomeLeft>
					<HomeRight>
						<Recommend></Recommend>
						<Writer></Writer>
					</HomeRight>
					{
						this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null
					}
				</HomeWrapper>
			</Fragment>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
}

const mapStateToProps = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatchToProps = (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			const action = actionCreators.changeScrollShow(true);
			dispatch(action);
		} else {
			const action = actionCreators.changeScrollShow(false);
			dispatch(action);
		}
		
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);