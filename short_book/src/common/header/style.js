import styled from 'styled-components';
import LogoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;


export const Logo = styled.div`
	width: 100px;
	height: 56px;
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	background-image: url(${LogoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
	padding-right: 70px;
	box-sizing: border-box;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left{
		float: left;
	}
	&.right{
		float: right;
		color: #969696;
	}
	&.active{
		color: #ea6f5a;
	}
`;

export const SearchWrapper = styled.div`
  position: relative;
	float: left;
	.zoom{
		right: 5px;
		bottom: 4px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		position: absolute;
		text-align: center;
		line-height: 30px;
		font-size: 17px;
		&.focused{
			background: #999;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: 'search'
})`
	width: 160px;
	height: 38px;
	border: none;
	outline: none;
	border-radius: 19px;
	margin-top: 9px;
	padding: 0 30px 0 20px;
	background: #eee;
	font-size: 14px;
	color: #444;
	box-sizing: border-box;
	margin-left: 20px;
	&::placeholder {
		color: #999;
	}
	&.focused{
		width: 240px;
	}
	&.slide-enter{
		transition: all .2s ease-out;
	}
	&.slide-enter-active{
		width: 240px;
	}
	&.slide-exit{
		width: 240px;
		transition: all .2s ease-out;
	}
	&.slide-exit-active{
		width: 160px;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	background: #fff;
	border-radius: 5px;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.div`
	float: right;
	font-size: 12px;
	cursor: pointer;
	.spin{
		display: block;
		float: left;
		font-size: 12px;
		transition: all .2s ease-in;
		transform: rotate(0deg);
		transform-origin: center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;
export const SearchInfoItem = styled.a`
	font-size: 12px;
	padding: 0 5px;
	line-height: 20px;
	color: #787878;
	border: 1px solid #ccc;
	border-radius: 2px;
	margin-right: 10px;
	margin-bottom: 10px;
	display: block;
	float: left;
`;

export const Addition = styled.div`
	top: 0;
	right: 0;
	position: absolute;
	hieght: 100%;
`;

export const Button = styled.button`
	float: right;
	line-height: 38px;
	border-radius: 19px;
	margin-top: 9px;
	box-sizing: border-box;
	border: 1px solide #ec6149;
	margin-right: 20px;
	padding: 0 20px;
	font-size: 14px;
	&.reg{
		color: #ec6149;
	}
	&.writing{
		color: #fff;
		background: #ec6149;
	}
`;
