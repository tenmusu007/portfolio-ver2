import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailWork from './components/DetailWork';
import { LinkProvider } from "./useContext/linkContext"
import data from './workData/data';
import { Header } from './components/Header';
import { Intro } from './components/Intro';


function App() {
  return (
    <LinkProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/intro" element={<Intro />} />
          <Route path={'/:id'} element={<DetailWork data={data} />} />
        </Routes>
      </BrowserRouter>
    </LinkProvider>
  );
}

export default App;
