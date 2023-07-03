import styled from 'styled-components';

export const DetailWrapper = styled.div`
	overflow: hidden;
	margin: 0 auto;
	width: 625px;
	padding-bottom: 100px;
`;

export const Header = styled.div`
	margin: 50px 0 20px 0;
	line-height: 44px;
	font-size: 34px;
	color: #333;
	font-weight: bold;
`;

export const Content = styled.div`
	color: #2f2f2f;
	img{
		width: 100%;
		border-radius: 10px;
	}
	p{
		color: #2f2f2f;
		text-indent: 2em;
		margin: 25px 0;
		line-height: 30px;
	}
`;