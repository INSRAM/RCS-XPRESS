import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <Box marginTop={"50px"}>
      <Grid
        container
        margin={"auto"}
        width={"90%"}
        style={{ display: "flex" }}
        justifyContent={"space-between"}
      >
        <Grid item container>
          <Grid item xs={12} md={6}>
            <img
              src="/RCS-white.png"
              alt="rcs"
              width={"300px"}
              height={"150px"}
            />
            <Typography
              component="div"
              fontFamily="Montserrat"
              fontSize="16px"
              fontWeight={500}
              lineHeight="32px"
              width={"80%"}
            >
              Your one stop solution to all your logistical needs. Headquartered
              in Lahore, we have been providing quality and professional
              International and Domestic Courier & Cargo services for over a
              decade.
            </Typography>
          </Grid>
          <Grid
            item
            justifyContent={"space-around"}
            container
            direction={"column"}
            xs={6}
            md={2}
          >
            <Grid
              style={{
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px",
                letterSpacing: "0em",
              }}
            >
              SERVICES
            </Grid>

            <Grid fontWeight={500} fontSize={"12px"} color={"#777777"}>
              International Services
            </Grid>
            <Grid fontWeight={500} fontSize={"12px"} color={"#777777"}>
              Air Freight
            </Grid>
            <Grid fontWeight={500} fontSize={"12px"} color={"#777777"}>
              Sea Freight
            </Grid>
            <Grid fontWeight={500} fontSize={"12px"} color={"#777777"}>
              Same Day Delivery
            </Grid>
            <Grid fontWeight={500} fontSize={"12px"} color={"#777777"}>
              Overnight
            </Grid>
            <Grid fontWeight={500} fontSize={"12px"} color={"#777777"}>
              Flyer Express
            </Grid>
            <Grid fontWeight={500} fontSize={"12px"} color={"#777777"}>
              Cash on Delivery
            </Grid>
          </Grid>
          <Grid
            item
            justifyContent={"space-around"}
            height={"50%"}
            container
            direction={"column"}
            xs={6}
            md={4}
          >
            <Grid
              style={{
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px",
                letterSpacing: "0em",
              }}
            >
              ABOUT US
            </Grid>
            <Grid fontWeight={500} fontSize={"12px"} color={"#777777"}>
              Who We Are
            </Grid>
            <Grid fontWeight={500} fontSize={"12px"} color={"#777777"}>
              Milestones
            </Grid>
            <Grid style={{ display: "flex", gap: "10px" }}>
              <Facebook />
              <Twitter />
              <Instagram />
            </Grid>
          </Grid>
          <Grid item width={"100%"}>
            <Divider />
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ display: "flex" }}
            margin={"10px"}
            fontWeight={500}
            fontSize={"12px"}
            color={"#777777"}
            // textAlign={"center"}
          >
            © 2017-2022 RCS. All rights reserved.
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
