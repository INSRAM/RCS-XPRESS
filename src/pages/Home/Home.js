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
    console.log("this is token ==> ", token);
    axios
      .get(`${serverUrl}/loginadmin`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("this is response ==> ", res);
          // setVerify(true);
        }
      })
      .catch((err) => {
        console.log("this is error ==> ", err);
        // navigate("/auth/login", { replace: true });
      });
  }, []);
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
