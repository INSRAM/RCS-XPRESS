import React from "react";
import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import HeroSection from "./compnents/Hero/Hero";
import Navbar from "./compnents/Navbar/Navbar";
import Services from "./pages/Service/Services";
import Footer from "./compnents/footer/Footer";
import Maps from "./pages/maps/Maps";
function App() {
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

export default App;
