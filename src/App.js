import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import MapSection from "./components/MapSection";
import Navbar from "./components/Navbar";
import {InfoData, InfoDataTwo} from "./data/InfoData";
import {SliderData} from "./data/SliderData";
import GlobalStyle from "./globalStyle";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <div id="about">
        <InfoSection {...InfoData} />
        <InfoSection {...InfoDataTwo} />
      </div>
      <div id="homes"></div>
      <div id="rentals"></div>
      <div id="location">
        <MapSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
