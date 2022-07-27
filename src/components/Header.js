// import { Typography } from '@mui/material'
import React from 'react'
import { StyledHeader } from "./styles/Header.styles"


export const Header = () => {
    return (
        <StyledHeader>
                <div className='headerImg'>
                    <p>AT</p>
                </div>
                <div className='headerMenu'>
                    <p className='HeaderAboutMe'> About me</p>
                    <p className='HeaderWork'> Work</p>
                    <p className='HeaderContact'> Contact</p>
                </div>
        </StyledHeader>
    )
}
