import styled from "styled-components";
export const StyledFooter = styled.div`
	font-family: "Playfair Display", serif;
	background-color: #ee6f57;
	opacity: 50%;
	text-align: center;
	position: fixed;
	width: 2rem;
	height: 30px;
	color: black;
	bottom: 25px;
	right: 25px;
	border-radius: 10px;
	p {
		color: white;
	}
	:hover {
		opacity: 100%;
	}
	a {
		color: white;
	}
	.arrow {
		margin-top: 3px;
	}
`;
