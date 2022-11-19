import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import HeroSection from "../../compnents/Hero/Hero";
import Navbar from "../../compnents/Navbar/Navbar";
import Services from "../Service/Services";
import Footer from "../../compnents/footer/Footer";
import Maps from "../maps/Maps";
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <AboutUs />
      <Maps />
      <Footer />
    </>
  );
}

export default Home;
