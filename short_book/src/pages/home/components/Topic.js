import React, { PureComponent } from 'react';
import { TopicWrapper,TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends PureComponent {
	render() {
		return (
			<TopicWrapper>
				{
					this.props.topicList.map((item) => {
						return (
							<TopicItem key={item.get('id')}>
								<img className='topic-pic' src={item.get('imgURL')} alt={item.get('title')} />
								{item.get('title')}
							</TopicItem>
						)
					})
				}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	topicList: state.getIn(['home','topicList'])
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Topic);