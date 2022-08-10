// import { Typography } from '@mui/material'
import React from 'react'
import { StyledHeader } from "./styles/Header.styles"
import AnchorLink from 'react-anchor-link-smooth-scroll'



export const Header = () => {
    return (
        <StyledHeader>
            <div className='headerImg'>
                <p>AT</p>
            </div>
            <div className='headerMenu'>
                <p className='HeaderAboutMe'>
                    <AnchorLink href='#aboutme'>
                        About me
                    </AnchorLink>
                </p>
                <p className='HeaderWork'>
                    <AnchorLink href='#work'>
                        Work
                    </AnchorLink>
                </p>
                <p className='HeaderContact'>
                    <AnchorLink href='#contact'>
                        Contact
                    </AnchorLink>
                </p>
            </div>
        </StyledHeader>
    )
}
