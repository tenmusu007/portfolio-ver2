import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StyledIntro } from "./styles/Intro.styled"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLinkContext } from '../useContext/linkContext';
// import bg from "./styles/bgImg"


export const theme = createTheme({
  palette: {
    btncolor: {
      // Purple and green play nicely together.
      main: '#EE6F57',
    },
  },
  typography: {
    fontFamily: [
      'Playfair Display',
      'serif'
    ].join(','),
  }
});
export const Intro = () => {
  const { link, setLink } = useLinkContext()
  const [animation, setAnimation] = useState("") 
  const [loopCount, setLoopCount] = useState(0) 

  useEffect(() => {
    let store = ""
    link.link.forEach((letter, i) => {
      setTimeout(() => {
        store = store + letter
        setAnimation(store)
      }, 500 * i);
    })    
    setLoopCount(loopCount)
  },[link.loop])



  return (
    // <ThemeProvider theme={theme}>
      <StyledIntro >
        <h1 className='welcome' id='home' >{animation}</h1>
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="section"
          rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} >
            <p className='name'>ATSUYA TANAKA</p>
            <p className='frontend'>Front-End Developer</p>
            {/* <Typography> */}
            <Button variant='contained' color="btncolor"  className='btnFont' > Resume </Button>
            {/* </Typography> */}
          </Grid>
        </Grid>
      </StyledIntro>
    // </ThemeProvider>
  )
}
