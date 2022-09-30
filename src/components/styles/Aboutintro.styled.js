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
		margin-top: 15%;
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
	@media only screen and (max-width: 700px) {
		.extraTxt {
			margin-top: 0;
			padding: 30px;
			display: block;
			line-height: 2;
			text-align: left;
			position: relative;
			width: 100%;
		}
	}
	@media only screen and (max-width: 500px) {
		.mobileGrid {
			display: flex;
			flex-direction: column-reverse;
		}
		.aboutIntroContainer {
		}
		.extraTxt {
			margin-top: 0;
			padding: 30px;
			display: block;
			line-height: 2;
			text-align: left;
			position: relative;
			width: 100%;
		}
		text-align: center;
		.moreRead {
			margin-top: 20px;
			color: white;
		}
		.imgContainer {
			width: 75%;
			height: 150px;
			margin: 0 auto;
		}
	}
`;
