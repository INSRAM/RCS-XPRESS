import React from "react";
import "./App.css";
import HeroSection from "./compnents/Hero/Hero";
import Navbar from "./compnents/Navbar/Navbar";
import Services from "./compnents/Service/Services";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
    </>
  );
}

export default App;
