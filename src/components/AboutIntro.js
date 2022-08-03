import React from 'react'
import { Grid } from '@mui/material'

export const AboutIntro = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }} alignItems="center">
            <Grid item xs={6}>
                <div>
                    <p className='aboutTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget volutpat lorem, a lobortis augue. Maecenas a dignissim velit. Vestibulum vehicula convallis massa sit amet porttitor. Maecenas eleifend, tellus at feugiat porta, elit diam finibus ipsum, a malesuada enim arcu sit amet ipsum.
                    </p>
                </div>
            </Grid>
            <Grid item xs={6} >
                    <div className='AboutMeImg'>Img</div>
            </Grid>
        </Grid>
    )
}
