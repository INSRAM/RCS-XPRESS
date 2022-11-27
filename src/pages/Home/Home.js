import React, { useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import HeroSection from "../../compnents/Hero/Hero";
import Navbar from "../../compnents/Navbar/Navbar";
import Services from "../Service/Services";
import Footer from "../../compnents/footer/Footer";
import Maps from "../maps/Maps";
import UserSlip from "../UserSlip/UserSlip";
function Home() {
  const [Shipper, setShipper] = useState(null);
  const onChangeShipperState = (shipperData) => {
    setShipper(shipperData);
  };
  return (
    <>
      <Navbar />
      <HeroSection onChangeShipperState={onChangeShipperState} />
      {Shipper !== null && <UserSlip shipperData={Shipper} />}
      <Services />
      <AboutUs />
      <Maps />
      <Footer />
    </>
  );
}

export default Home;
