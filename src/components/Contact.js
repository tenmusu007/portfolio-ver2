import React from 'react'
import { StyledContact } from './styles/Contact.styled'
import { Icon } from '@iconify/react';
export const Contact = () => {
    return (
        <StyledContact id='contact'>      
            <div className='iconContainer'>
                <Icon icon="akar-icons:linkedin-v1-fill" className='icon' />
                <Icon icon="akar-icons:github-fill" className='icon' />
                <Icon icon="brandico:facebook-rect" className='icon' />
            </div>
            <p className='mail'>tenmusu007@gamil.com</p>
            
        </StyledContact>
    )
}
