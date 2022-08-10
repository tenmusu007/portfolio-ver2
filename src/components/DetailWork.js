import React from 'react'
import { Header } from './Header'
import { StyledDetailWork } from "./styles/Detail.styled"
import { useParams } from 'react-router-dom';
import { Button} from '@mui/material'
import { theme } from '../components/Intro'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const DetailWork = (props) => {
  const params = useParams();
  return (
    <ThemeProvider theme={theme}>
      <StyledDetailWork>
        <Header />
        {props.data.map((link, index) => {
          // console.log("obj", link); 
          if (link.to === params.id) {
            return (
              <div key={index}>
                <h2 className='title'>{link.title}</h2>
                <div className='cardConatiner'>
                  <div className='picContainer'>
                    <img src={`${link.pic[0]}`} alt="detail pic" className='pic' />
                    <img src={`${link.pic[1]}`} alt="detail pic" className='pic' />
                  </div>
                  <p className='cardtxt'>{link.desc}</p>
                  <Button variant='contained' color="btncolor" className='btn'> app </Button>
                  <Button variant='contained' color="btncolor" className='btn'> Repository </Button>
                </div>
                <div>
                  <a href={link.repoUrl}>
                    <div className='repoUrl'>
                    </div>
                  </a>
                </div>
              </div>
            )
          }
        })
        }
      </StyledDetailWork>
    </ThemeProvider>
  )
}

export default DetailWork