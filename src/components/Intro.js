import { Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StyledIntro } from "./styles/Intro.styled"
import { useLinkContext } from '../useContext/linkContext';
// import bg from "./styles/bgImg"


export const Intro = () => {
  const { link } = useLinkContext()
  const [animation, setAnimation] = useState("") 
  const [loopCount, setLoopCount] = useState(0) 

  useEffect(() => {
    let store = ""
    const txt = ["W", "e", "l", "c", "o", "m", "e", "!"]
    txt.forEach((letter, i) => {
      setTimeout(() => {
        store = store + letter
        setAnimation(store)
      }, 500 * i);
    })    
    setLoopCount(loopCount)
  },[link.loop])



  return (
		<StyledIntro>
			<div className='bgimg'></div>
			<div className='Container'>
				<h1 className='welcome' id='home'>
					{animation}
				</h1>
				<Grid
					container
					direction='row'
					justifyContent='center'
					alignItems='center'
					className='section'
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				>
					<Grid item xs={12}>
						<p className='name'>ATSUYA TANAKA</p>
						<p className='frontend'>Front-End Developer</p>
						<Button variant='contained' color='btncolor' className='btnFont'>
							<a
								href={`${process.env.PUBLIC_URL}/Resume.pdf`}
								target='_blank'
								rel='noreferrer'
								style={{ color: "white" }}
							>
								Resume
							</a>
						</Button>
					</Grid>
				</Grid>
			</div>
		</StyledIntro>
	);
}
