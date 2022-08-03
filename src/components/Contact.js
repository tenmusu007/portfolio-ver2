import React from 'react'
import { StyledContact } from './styles/Contact.styled'
import { Icon } from '@iconify/react';
export const Contact = () => {
    return (
        <StyledContact>
            <h2 className='contactTxt'>Contact</h2>
            <div className='iconContainer'>
                <Icon icon="akar-icons:linkedin-v1-fill" />
                <Icon icon="ant-design:mail-outlined" />
                <Icon icon="akar-icons:github-fill" />
                <Icon icon="line-md:instagram" />
            </div>
            
        </StyledContact>
    )
}
