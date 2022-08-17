import React from "react";
import { AboutIntro } from "./AboutIntro";
import Skilles from "./Skilles";
import { StyledAboutMe } from "../styles/AboutMe.styled";

export const AboutMe = () => {
	return (
		<StyledAboutMe id='aboutme'>
			<div className='bgColor'>
				<h2 className='AboutMeTitle'>About me</h2>
				<AboutIntro />
				<Skilles />
			</div>
		</StyledAboutMe>
	);
};
