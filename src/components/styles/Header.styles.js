import styled from "styled-components";
export const StyledHeader = styled.header`
	/* position: sticky; */
	font-family: "Playfair Display", serif;
	align-items: center;
	height: 50px;
	color: #00473e;
	position: fixed;
	top: 0;
	background-color: #fffffe;
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 10px 0px;
	z-index: 20;
	.headerImg {
		width: 20px;
		padding-left: 10px;
	}
	.headerMenu {
		display: flex;
		padding-right: 30px;
		a {
			color: #00473e;
		}
		p {
			padding: 0 15px 0 15px;
			margin-left: 5px;
			transition: all 0.5s ease-in-out;
			box-shadow: 20px 20px 60px #bababa, -20px -20px 60px #ffffff;
			box-shadow: 22px 22px 44px #d9d9d9, -22px -22px 44px #ffffff;
			border-radius: 20px;
		}
		p:hover {
			background-color: #00473e;
			color: white;
		}
	}
	.homeBtn {
	}
	a {
		color: black;
	}
	.menuTxt {
		margin: 20px;
	}
	@media only screen and (max-width: 600px) {
		position: fixed;
		margin-right: 20px;
		a {
			color: black;
		}
	}
`;
