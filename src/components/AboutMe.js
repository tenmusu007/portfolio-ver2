import { Grid } from '@mui/material'
import React from 'react'
import { AboutIntro } from './AboutIntro'
import { EducationCareer } from './EducationCareer'
import { StyledAboutMe } from "./styles/AboutMe.styled"

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <h2 className='AboutMeTitle'>About me</h2>
      <AboutIntro />
      <h2 className='AboutMeTitle'>Education & Career</h2>
      <EducationCareer />
    </StyledAboutMe>
  )
}
