import styled from 'styled-components';

export const HomeWrapper = styled.div`
	margin: 0 auto;
	width: 960px;
	overflow: hidden;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-image{
		width: 625px;
		height: 270px;
		border-radius: 7px;
	}
`;

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -10px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	border: 1px solid #f7f7f7;
	color: #000;
	font-size: 14px;
	border-radius: 4px;
	padding-right: 10px;
	margin: 0 0px 10px 16px;
	.topic-pic{
		width: 32px;
		height: 32px;
		float: left;
		display: block;
		margin-right: 10px;
	}
`;

export const ListWrapper = styled.div`
	.list-router{
		text-decoration: none;
	}
`;

export const ListItem = styled.div`
	padding: 20px 0;
	overflow: hidden;
	border-bottom: 1px solid #dcdcdc;
	.list-pic {
		float: right;
		display: block;
		width: 125px;
		height: 100px;
		border-radius: 10px;
	}
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #787878;
	}
`;
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #999;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	margin: 30px 0;
	cursor: pointer;
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const RecommendWrapper = styled.div`
	width: 280px;
	margin: 30px 0;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 30px;
	bottom: 30px;
	width: 60px;
	border: 1px solid #ccc;
	height: 60px;
	line-height: 60px;
	text-align: center;
	cursor: pointer;
`;
