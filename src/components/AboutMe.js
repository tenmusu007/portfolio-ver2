import { Grid } from '@mui/material'
import React from 'react'
import { StyledAboutMe } from "./styles/AboutMe.styled"

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      {/* <div>AboutMe</div> */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec aliquet tempus ex in vestibulum.Donec non magna odio.Pellentesque tempus felis velit, at fringilla lectus porta efficitur.Vestibulum ante ipsum primis 
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec aliquet tempus ex in vestibulum.Donec non magna odio.Pellentesque tempus felis velit, at fringilla lectus porta efficitur.Vestibulum ante ipsum primis
          </p>
        </Grid>
      </Grid>
    </StyledAboutMe>
  )
}
