import React from 'react'
import Backend from './skill/Backend'
import Frontend from './skill/Frontend'
const Skilles = () => {
    return (
        <div className='skillConatiner'>
            <h2 className='AboutMeTitle'>Skills</h2>
            <div className='iconWrapper'>
                <Frontend />
                <Backend />
            </div>
        </div>
    )
}

export default Skilles