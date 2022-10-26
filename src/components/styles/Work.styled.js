import styled from "styled-components";
export const StyledWork = styled.section`
	font-family: "Playfair Display", serif;
	width: 75%;
	margin: 0 auto;
	margin-top: 85px;
	height: auto;
	background-color: #f8f8f8;
	padding: 50px 0;
	border: 2px solid black;
	.WorkTitle {
		text-align: center;
		margin-bottom: 20px;
		font-size: 35px;
		font-family: sans-serif;
		font-weight: 300;
	}
	.WorkImgContainer {
		width: 50%;
		margin: 0 auto;
		.WorkImg {
			width: 100%;
			height: 100%;
			object-fit: contain;
			box-shadow: 12px 12px 24px #cecece, -12px -12px 24px #ffffff;
		}
	}
	.workTxt {
		padding: 10px 0px;
		text-align: center;
		width: 50%;
		margin: 0 auto;
	}
	.iconBox {
		text-align: center;
		.icon{
			font-size: 25px;
			margin: 0 10px;
		}
	}
	.grid {
		margin-top: 30px;
		transition: all 0.2s ease-in-out;
		a {
			text-decoration: none;
			color: #00473e;
		}
		:hover {
			transform: scale(1.1);
		}
	}
`;
