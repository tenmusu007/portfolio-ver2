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
									I was born and rasised in Osaka, Japan, I graduated from
									Otemon University in 2021. My major was International Liberal
									Art. I studied international Politics and team managiment
									skills at the University.
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
										I was born and rasised in Osaka, Japan, I graduated from
										Otemon University in 2021. My major was International
										Liberal Art. I studied international Politics and team
										managiment skills at the University. I was thinking of
										finding a job in Japan while in university, but I could not
										forget the experience of studying abroad in Seattle, USA
										when I was a second year, so I decided to learn English and
										come true my dream of working abroad. I currently live in
										Vancouver as a CICCC Wamd student to become a front-end
										developer. I want to be a front-end engineer because I
										started to be interested in it after taking a simple HTML
										and CSS class at university. I was shocked to see how much
										code is used to create even a simple website, so I started
										studying independently. Now I am very happy to be learning
										something new.
									</p>
								</div>
							</motion.div>
						)}
					</Grid>
					<Grid item xs={12} sm={12} md={modal ? 6 : 4}>
						<div className='imgContainer'>
							<img
								src={`${process.env.PUBLIC_URL}/img/myself.jpeg `}
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