
import React from 'react'
import { AboutIntro } from './AboutIntro'
import Backend from './skill/Backend'
import Frontend from './skill/Frontend'
import { StyledAboutMe } from "./styles/AboutMe.styled"

export const AboutMe = () => {
  return (
    <StyledAboutMe id='aboutme'>
      <div className='bgColor'>
      <h2 className='AboutMeTitle' >About me</h2>
      <AboutIntro />
      <h2 className='AboutMeTitle'>Skilles</h2>
      <h3 className='icontitle'>Forntend</h3>
      <Frontend />
      <h3 className='icontitle'>Backend</h3>
      <Backend/>
      </div>
    </StyledAboutMe>
  )
}
