import React from 'react'
import { Grid } from '@mui/material'
import { StyledAboutintro } from "../components/styles/Aboutintro.styled"

export const AboutIntro = () => {
    return (
        <StyledAboutintro>
            <Grid item >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md:2 }} alignItems="center" className='mobileGrid' >
                    <Grid item xs={12} sm={12} md={6}>
                        <div>
                            <p className='aboutTxt'>
                                I was born and rasised in Osaka, Japan, 1999, March 1st. I graduated from Otemon University in 2021. My major was International Liberal Art. I studied international Politics and team managiment skills at the University. I have lived in Seattle for several months as a international student.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} >
                        <div className='imgContainer'>
                            <img src={`${process.env.PUBLIC_URL}/img/myself.jpeg `} alt="atsupic" className='AboutMeImg' />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </StyledAboutintro>
    )
}
