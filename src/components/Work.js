import React from 'react'
import { Grid } from '@mui/material'
import { StyledWork } from './styles/Work.styled'

export const Work = () => {
  return (
    <StyledWork>
      <h2 className='WorkTitle'>Work</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} className='grid'>
          <div className='WorkImgContainer'>
            <div className='WorkImg'>Img</div>
          </div>
          <p className='workTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget volutpat lorem, a lobortis augue. Maecenas a dignissim velit. Vestibulum vehicula convallis massa sit amet porttitor. Maecenas eleifend, tellus at feugiat porta, elit diam finibus ipsum, a malesuada enim arcu sit amet ipsum.
          </p>
        </Grid>
        <Grid item xs={6} className='grid'>
            <div className='WorkImgContainer'>
              <div className='WorkImg'>Img</div>
            </div>
            <p className='workTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget volutpat lorem, a lobortis augue. Maecenas a dignissim velit. Vestibulum vehicula convallis massa sit amet porttitor. Maecenas eleifend, tellus at feugiat porta, elit diam finibus ipsum, a malesuada enim arcu sit amet ipsum.
            </p>
        </Grid>
        <Grid item xs={6} className='grid'>
          <div className='WorkImgContainer'>
            <div className='WorkImg'>Img</div>
          </div>
          <p className='workTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget volutpat lorem, a lobortis augue. Maecenas a dignissim velit. Vestibulum vehicula convallis massa sit amet porttitor. Maecenas eleifend, tellus at feugiat porta, elit diam finibus ipsum, a malesuada enim arcu sit amet ipsum.
          </p>
        </Grid>
        <Grid item xs={6} className='grid'>
            <div>
              <div className='WorkImg'>Img</div>
            </div>
            <p className='workTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget volutpat lorem, a lobortis augue. Maecenas a dignissim velit. Vestibulum vehicula convallis massa sit amet porttitor. Maecenas eleifend, tellus at feugiat porta, elit diam finibus ipsum, a malesuada enim arcu sit amet ipsum.
            </p>
        </Grid>
      </Grid>
    </StyledWork>
  )
}
