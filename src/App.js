import './App.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Work } from './components/Work';
import { Intro } from './components/Intro';
function App() {
  return (
    <div className="App">
      <Header />
      <Intro/>
      <AboutMe />
      <Work />
      
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant='h1' mt={2}> Hello </Typography>
      <HomeIcon></HomeIcon> */}
    </div>
  );
}

export default App;
