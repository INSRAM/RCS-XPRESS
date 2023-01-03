import React, { useState, useEffect } from "react";
import { serverUrl } from "../../utils/constants";
import AboutUs from "../AboutUs/AboutUs";
import HeroSection from "../../compnents/Hero/Hero";
import Navbar from "../../compnents/Navbar/Navbar";
import Services from "../Service/Services";
import Footer from "../../compnents/footer/Footer";
import Maps from "../maps/Maps";
import UserSlip from "../UserSlip/UserSlip";
import axios from "axios";
function Home() {
  const [Shipper, setShipper] = useState(null);
  const onChangeShipperState = (shipperData) => {
    setShipper(shipperData);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${serverUrl}/loginadmin`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
        }
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ background: "#ff2d001f", marginTop: "2px" }}>
        <marquee width="100%" direction="left" height="20px" background="red">
          <div style={{ color: "#ff8a00" }}>
            This is a sample scrolling text that has scrolls in the upper
            direction.
          </div>
        </marquee>
      </div>

      <HeroSection onChangeShipperState={onChangeShipperState} />
      {Shipper !== null && <UserSlip shipperData={Shipper} />}
      <Services />
      <AboutUs />
      <Maps />
      <Footer />
      {/* <NewsTicker /> */}
    </>
  );
}

export default Home;
