import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { camarones, dark, light } from "../components/Menu/data";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Menu
        heading="Elige tu favorito"
        data={camarones}
        props={dark}
        id={"camarones"}
      />
      <Menu
        heading="Elige tu favorito"
        data={camarones}
        props={light}
        id={"pescados"}
      />
      <Menu
        heading="Elige tu favorito"
        data={camarones}
        props={dark}
        id={"cocteleria"}
      />
      <Menu
        heading="Elige tu favorito"
        data={camarones}
        props={light}
        id={"bebidas"}
      />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;
