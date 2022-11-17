import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import adidas from "../../assets/about_us/adidas.png";
import ali_pay from "../../assets/about_us/ali_pay.png";
import discover from "../../assets/about_us/discover.png";
import hipercard from "../../assets/about_us/hipercard.png";
import jcb from "../../assets/about_us/jcb.png";
import { styled } from "@mui/material/styles";
const CustomImage = styled("img")((theme) => ({
  objectFit: "contain",
  height: "300px",
  "@media screen and (max-width: 768px)": {
    height: "auto",
    width: "100%",
  },
  // [theme.breakpoints.down("md")]: {
  //   height: "100px",
  // },
}));
function AboutUs() {
  return (
    <Grid
      container
      width={"90vw"}
      direction="column"
      margin={"auto"}
      padding="50px"
    >
      <Grid item container rowSpacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: { xs: "40px", md: "59px" },
              height: "0px",
              border: "1px solid #FF6300",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="div"
            fontFamily="Montserrat"
            fontSize={{ xs: "24px", md: "36px" }}
            fontWeight={{ xs: 500, md: 800 }}
            lineHeight="40px"
            letterSpacing=" 0.1em"
            textTransform={"uppercase"}
            color={"#FF6300"}
          >
            About Us
          </Typography>
        </Grid>
      </Grid>
      <Grid item container columnSpacing={2}>
        <Grid item xs={12} sm={6} padding={"20px"}>
          <Typography
            component="div"
            fontFamily="Montserrat"
            fontSize={{ xs: "16px", md: "20px" }}
            fontWeight={{ xs: 400, md: 500 }}
            lineHeight="46px"
          >
            RCS Worldwide Express (Pvt.) Ltd. is a significant player in express
            courier services in Pakistan. The name is synonymous with premium
            quality in major financial exchanges, banks, institutions, trading
            companies and more. We offer a wide range of express delivery
            solutions that map your business needs.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          // padding={"20px"}
          // style={{
          //   backgroundImage: `url(/aboutUs.jpeg)`,
          //   height: "300px",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <CustomImage src="/aboutUs.jpeg" />
        </Grid>
        <Grid
          container
          item
          justifyContent={"space-between"}
          style={{ display: "flex" }}
        >
          <img
            style={{ margin: "5px" }}
            src={ali_pay}
            alt="ali_pay"
            width="120px"
            height={"80px"}
          />
          <img
            style={{ margin: "5px" }}
            src={discover}
            alt="discover"
            width="120px"
            height={"80px"}
          />
          <img
            style={{ margin: "5px" }}
            src={adidas}
            alt="adidas"
            width="120px"
            height={"80px"}
          />
          <img
            style={{ margin: "5px" }}
            src={hipercard}
            alt="hipercard"
            width="120px"
            height={"80px"}
          />
          <img
            style={{ margin: "5px" }}
            src={jcb}
            alt="jcb"
            width="120px"
            height={"80px"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutUs;
