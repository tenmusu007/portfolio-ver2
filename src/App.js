import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailWork from './components/DetailWork';
import { LinkProvider } from "./useContext/linkContext"
import { useLinkContext } from '../src/useContext/linkContext';
import { useState } from 'react';
import data from './workData/data';


function App(props) {
  // const { link, setLink } = useLinkContext()
  return (
    <LinkProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={'/:id'} element={<DetailWork data={data} />} />
        </Routes>
      </BrowserRouter>
    </LinkProvider>
  );
}

export default App;
