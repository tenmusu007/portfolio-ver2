import React from 'react'
import { Grid } from '@mui/material'
import { StyledWork } from './styles/Work.styled'
import { Link } from 'react-router-dom';
import data from "../workData/data"
import { useLinkContext } from '../useContext/linkContext';

export const Work = (props) => {
  const { link, setLink } = useLinkContext()
  // console.log("work", props.test);
  // console.log("work", props.setTest("atsu"));
  return (
    <StyledWork id='work'>
      <h2 className='WorkTitle'>Work</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((data, index) => {
          return (
            <Grid item xs={6} className='grid' key={index} onClick={() => {setLink(data.to) }}>
              <Link to={`/${data.to}`}>
                <div className='WorkImgContainer'>
                  <img className='WorkImg' src={data.pic[0]} alt="workPic" />
                </div>
                <p className='workTxt'>{data.title}</p>
                <p className='workTxt'>{data.desc}</p>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </StyledWork>
  )
}
