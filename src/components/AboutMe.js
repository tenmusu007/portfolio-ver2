
import React from 'react'
import { AboutIntro } from './AboutIntro'
import Backend from './skill/Backend'
import Frontend from './skill/Frontend'
import Skilles from './Skilles'
import { StyledAboutMe } from "./styles/AboutMe.styled"

export const AboutMe = () => {
  return (
    <StyledAboutMe id='aboutme'>
      <div className='bgColor'>
      <h2 className='AboutMeTitle' >About me</h2>
      <AboutIntro />
      {/* <h2 className='AboutMeTitle'>Skilles</h2>
      <Frontend />
      <Backend/> */}
        <Skilles />
      </div>
    </StyledAboutMe>
  )
}
