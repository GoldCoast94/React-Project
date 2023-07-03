import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
			{
				this.props.recommendList.map((item) => {
					return(
						<RecommendItem imgUrl={item.get('imgURL')} key={item.get('id')}>
						</RecommendItem>
					)
				})
			}
			</RecommendWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	recommendList: state.getIn(['home','recommendList'])
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps,mapDispatchToProps)(Recommend);