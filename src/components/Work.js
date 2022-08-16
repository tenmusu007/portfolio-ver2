import React from "react";
import { Grid } from "@mui/material";
import { StyledWork } from "./styles/Work.styled";
import { Link } from "react-router-dom";
import data from "../workData/data";
import { useLinkContext } from "../useContext/linkContext";

export const Work = () => {
	const { setLink } = useLinkContext();
	return (
		<StyledWork id='work'>
			<h2 className='WorkTitle'>Work</h2>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
				{data.map((data, index) => {
					return (
						<Grid
							item
							xs={12}
							sm={12}
							md={6}
							className='grid'
							key={index}
							onClick={() => {
								setLink(data.to);
							}}
						>
							<Link to={`/${data.to}`}>
								<div className='WorkImgContainer'>
									<img className='WorkImg' src={data.pic[0]} alt='workPic' />
								</div>
								<p className='workTxt'>{data.title}</p>
								<p className='workTxt'>{data.desc}</p>
							</Link>
						</Grid>
					);
				})}
			</Grid>
		</StyledWork>
	);
};
