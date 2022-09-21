import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { StyledAboutintro } from "../components/styles/Aboutintro.styled";
import { motion } from "framer-motion";

export const AboutIntro = () => {
	const [modal, setModal] = useState(true);
	const aboutModalhandler = () => {
		setModal(!modal);
	};
	return (
		<StyledAboutintro>
			<Grid item className='aboutIntroContainer'>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 2, sm: 2, md: 2 }}
					alignItems='center'
					className='mobileGrid'
				>
					<Grid item xs={12} sm={12} md={modal ? 6 : 8}>
						{modal && (
							<div>
								<p className='aboutTxt'>
									I was born and raised in Osaka, Japan. I graduated from Otemon
									University in 2021. I studied international Politics and team
									management skills.
								</p>
							</div>
						)}
						{!modal && (
							<motion.div
								animate={{
									x: 0,
									opacity: 1,
								}}
								initial={{
									x: 100,
									opacity: 0,
								}}
								exit={{
									x: -100,
									opacity: 0,
								}}
								transition={{
									duration: 1,
								}}
							>
								<div className={"extraTxt"}>
									<p className='aboutTxt'>
										I was born and raised in Osaka, Japan. I graduated from
										Otemon University in 2021. I studied international Politics
										and team management skills. I'm here to become a Front-end
										developer. I was going to work in Japan after graduating,
										but I can't forget the moment of studying abroad in Seattle
										when I was a student because, at that time, I struggled a
										lot with English and felt how difficult to speak English.
										Working abroad is one of my dreams, so I decided to go to
										Vancouver. I know only studying English doesn't mean a lot
										to me, so I've been interested in programming since I knew
										my dad was an engineer. Before starting class, I had no idea
										about programming, but now I enjoy learning new things
										because if I learn something new and use it for my project,
										I can feel I'm improving. That's why I like programming.
										Background things aside, I like sports, especially soccer
										and ping-pong, and I play soccer often at the weekend.
										Ping-pong was my passion until I graduated from university.
										Cooking is also my interest. My favorite food is pasta.
									</p>
								</div>
							</motion.div>
						)}
					</Grid>
					<Grid item xs={12} sm={12} md={modal ? 6 : 4}>
						<div className='imgContainer'>
							<img
								src={`${process.env.PUBLIC_URL}/img/myself.jpeg`}
								alt='atsupic'
								className={!modal ? "AboutMeImgChange" : "AboutMeImg"}
							/>
						</div>
					</Grid>
				</Grid>
				<Button
					variant='contained'
					color='btncolor'
					className='moreRead'
					onClick={aboutModalhandler}
				>
					read more
				</Button>
			</Grid>
		</StyledAboutintro>
	);
};
