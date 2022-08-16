import styled from "styled-components";
export const StyledAboutintro = styled.div`
	@media only screen and (max-width: 900px) {
		.mobileGrid {
			display: flex;
			flex-direction: column-reverse;
		}
	}
	.aboutIntroContainer {
		text-align: center;
	}
	.extraTxt {
		margin-top: 5px;
		padding: 30px;
		display: block;
		line-height: 2;
		text-align: left;
		position: relative;
		width: 100%;
	}
	.moreRead {
		margin-top: 20px;
		color: white;
	}
`;
