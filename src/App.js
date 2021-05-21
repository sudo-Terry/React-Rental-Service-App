import React from 'react';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import { SliderData } from './data/SliderData';
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
