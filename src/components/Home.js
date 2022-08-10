import React from 'react'
import { AboutMe } from './AboutMe'
import { Contact } from './Contact'
import Footer from './Footer'
import { Header } from './Header'
import { Intro } from './Intro'
import { Work } from './Work'
import { Globalstyle } from '../components/styles/Globalstyle.styled'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../components/Intro'
const Home = () => {
    return (
        <ThemeProvider theme={theme}>
        <Globalstyle>
            <Header />
            <Intro  />
            <Work />
            <AboutMe />
            <Contact />
            <Footer />
            </Globalstyle>
        </ThemeProvider>

    )
}

export default Home