import React from 'react'
import { Header } from './Header'
import { StyledDetailWork } from "./styles/Detail.styled"
import { useParams, Link } from 'react-router-dom';
import { Button, Grid,} from '@mui/material'
import { theme } from '../components/Home'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const DetailWork = (props) => {
  console.log(props);
  const params = useParams();
  return (
    <ThemeProvider theme={theme}>
      <StyledDetailWork>
        <Link to={"/"}>
          <Button variant='contained'size="small" color="btncolor" className='back'>
            <ArrowBackIcon style={{fontSize : "15px"} } />
          </Button>
        </Link>
        {props.data.map((link, index) => {
          // console.log("obj", link); 
          if (link.to === params.id) {
            return (
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }} alignItems="center" className='grid' key={index} >
                <Grid item xs={12} sm={6} >
                  <div className='picContainer'>
                    <img src={`${link.pic[1]}`} alt="detail pic" className='pic' />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} className='grid'>
                  <h2 className='title'>{link.title}</h2>
                  <p className='cardtxt'>{link.desc}</p>
                  <Button variant='contained' color="btncolor" className='btn'> app </Button>
                  <Button variant='contained' color="btncolor" className='btn'> Repository </Button>
                </Grid>
                <Grid item xs={12} sm={12} className='grid'>
                  <Link to={`/${props.data[index + 1].to}`}>
                    <Button variant='contained' size="small" color="second" className='forward' >
                      next project
                    </Button>
                  </Link>
                </Grid>

              </Grid>
            )
          }
        })}

      </StyledDetailWork>
    </ThemeProvider>
  )
}

export default DetailWork