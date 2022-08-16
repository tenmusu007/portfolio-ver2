import styled from "styled-components";
export const StyledIntro = styled.section`
	font-family: "Playfair Display", serif;
	margin-top: 2rem;
	padding-bottom: 3rem;
	.bgimg {
		height: 100vh;
		background-image: url("${process.env.PUBLIC_URL}/img/bgimg4.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		filter: blur(5px);
	}

	.Container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.welcome {
		color: white;
		text-align: center;
		padding-top: 110px;
		font-size: 3rem;
		text-shadow: 2px 8px 2px rgba(0, 0, 0, 0.3);
		z-index: 2;
	}
	.section {
		padding: 60px 0 100px 0;
		text-align: center;
		.name {
			font-size: 4rem;
			color: white;
			text-align: center;
			margin: 2rem 0;
			text-shadow: 2px 8px 2px rgba(0, 0, 0, 0.3);
			z-index: 2;
		}
		.frontend {
			text-align: center;
			font-size: 2rem;
			color: white;
			padding-bottom: 2rem;
			text-shadow: 2px 8px 2px rgba(0, 0, 0, 0.3);
		}
		.btnFont {
			color: white;
		}
	}
	.introImg {
		width: 200px;
		height: 200px;
		background-color: aqua;
	}
	.introTxt {
		text-align: center;
		p {
			color: white;
			font-size: 30px;
			padding: 10px 5px;
		}
	}
	@media only screen and (max-width: 900px) {
		.bgimg {
			height: 100vh;
			background-image: url("${process.env.PUBLIC_URL}/img/bgimg4.jpg");
			background-repeat: no-repeat;
			background-size: cover;
			background-attachment: fixed;
			background-position-x: 50%;
			filter: blur(5px);
		}
		.welcome {
			color: white;
			text-align: center;
			padding-top: 10rem;
			font-size: 2rem;
			text-shadow: 2px 8px 2px rgba(0, 0, 0, 0.3);
			z-index: 2;
		}
		.section {
			padding: 30px 0 100px 0;
			text-align: center;
			.name {
				font-size: 3rem;
				color: white;
				text-align: center;
				margin: 2rem 0;
				text-shadow: 2px 8px 2px rgba(0, 0, 0, 0.3);
				z-index: 2;
			}
			.frontend {
				text-align: center;
				font-size: 1rem;
				color: white;
				padding-bottom: 2rem;
				text-shadow: 2px 8px 2px rgba(0, 0, 0, 0.3);
			}
			.btnFont {
				color: white;
			}
		}
	}
`;
