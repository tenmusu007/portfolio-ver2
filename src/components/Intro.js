import { Button } from '@mui/material'
import React from 'react'
import { StyledIntro } from "./styles/Intro.styled"
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    btncolor: {
      // Purple and green play nicely together.
      main: '#EE6F57',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});
export const Intro = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledIntro>
        <div className='introImg'>Img</div>
        <div className='introTxt'>
          <p>I AM</p>
          <p>ATSUYA TANAKA</p>
          <p>Jounier</p>
          <p>Front-End Developer</p>
            <Button Button variant='contained' color="btncolor" > Resume </Button>
        </div>
      </StyledIntro>
    </ThemeProvider>
  )
}
