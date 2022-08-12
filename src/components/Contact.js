import React from 'react'
import { StyledContact } from './styles/Contact.styled'
import { Icon } from '@iconify/react';
export const Contact = () => {
    return (
        <StyledContact id='contact'>
            <div className='iconContainer'>
                <a href="https://www.linkedin.com/in/atsuya-tanaka-566013229/" rel="noreferrer">
                    <Icon icon="akar-icons:linkedin-v1-fill" className='icon' />
                </a>
                <a href="https://github.com/tenmusu007" rel="noreferrer">
                    <Icon icon="akar-icons:github-fill" className='icon' />
                </a>
                <a href="https://www.facebook.com/atsina.tanaka.1" rel="noreferrer">
                    <Icon icon="brandico:facebook-rect" className='icon' />
                </a>
            </div>
            <a href="mailto:tenmusu007gmail.com" rel="noreferrer" target="_blank">
                <p className='mail'>tenmusu007@gamil.com</p>
            </a>
        </StyledContact>
    )
}
