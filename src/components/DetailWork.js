import React from "react";
import { StyledDetailWork } from "../styles/Detail.styled";
import { useParams, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { theme } from "../components/Home";
import { ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";

const DetailWork = (props) => {
	console.log(props);
	const params = useParams();
	return (
		<ThemeProvider theme={theme}>
			<StyledDetailWork>
				<Link to={"/"}>
					<Button
						variant='contained'
						size='small'
						color='btncolor'
						className='back'
					>
						<ArrowBackIcon style={{ fontSize: "15px" }} />
					</Button>
				</Link>
				{props.data.map((link, index) => {
					if (link.to === params.id) {
						return (
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
								key={index}
							>
								<Grid
									container
									rowSpacing={1}
									columnSpacing={{ xs: 1, sm: 2 }}
									alignItems='center'
									className='grid'
								>
									<Grid item xs={12} sm={6} md={6}>
										<div className='picContainer'>
											<img
												src={`${link.pic[1]}`}
												alt='detail pic'
												className='pic'
											/>
										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} className='grid'>
										<h2 className='title'>{link.title}</h2>
										<p className='cardtxt'>{link.desc2}</p>
										<a href={link.work} rel='noreferrer' target='_blank'>
											<Button
												variant='contained'
												color='btncolor'
												className='btn'
											>
												{" "}
												app{" "}
											</Button>
										</a>
										<a href={link.repoUrl} rel='noreferrer' target='_blank'>
											<Button
												variant='contained'
												color='btncolor'
												className='btn'
											>
												{" "}
												Repository{" "}
											</Button>
										</a>
									</Grid>
									<Grid item xs={12} sm={12} className='grid'>
										<Link
											to={`/${
												props.data[index + 1] === undefined
													? props.data[0].to
													: props.data[index + 1].to
											}`}
										>
											<Button
												variant='contained'
												size='small'
												color='second'
												className='forward'
											>
												next project
											</Button>
										</Link>
									</Grid>
								</Grid>
							</motion.div>
						);
					}
					return ""
				})}
			</StyledDetailWork>
		</ThemeProvider>
	);
};

export default DetailWork;
