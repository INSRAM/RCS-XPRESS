import React, { Component } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Logo1 from "../../assets/RCS 1.png";
class Print extends Component {
  render() {
    const data = this.props.data;
    return (
      <Box
        height={"100%"}
        width={"98%"}
        border={"1px solid black"}
        margin={"auto"}
        marginTop="10px"
      >
        <Grid container display={"flex"} padding={"20px"}>
          <Grid item container xs={6} direction={"column"}>
            <Grid item container border={"1px solid black"}>
              <Grid item padding={"5px"}>
                <Typography sx={{ fontSize: "20px" }}>
                  Tracking ID: {data.trackingId}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container>
                <Typography style={{ fontSize: "20px", fontWeight: 900 }}>
                  From : SHIPPER'S ADDRESS
                </Typography>
              </Grid>
              <Grid
                item
                container
                border={"1px solid black"}
                direction={"column"}
                padding={"5px"}
              >
                <Grid item container>
                  <Typography>Name: </Typography>
                </Grid>
                <Grid item container>
                  <Typography>Address: </Typography>
                </Grid>
                <Grid item container justifyContent={"space-between"}>
                  <Grid item>
                    <Typography>City: </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Postal/Zip Code: </Typography>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Typography>Phone: </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container>
                <Typography style={{ fontSize: "20px", fontWeight: 900 }}>
                  TO: RECEIVER'S ADDRESS
                </Typography>
              </Grid>
              <Grid
                item
                container
                border={"1px solid black"}
                direction={"column"}
                padding={"5px"}
              >
                <Grid item container>
                  <Typography>Name: </Typography>
                </Grid>
                <Grid item container>
                  <Typography>Address: </Typography>
                </Grid>
                <Grid item container justifyContent={"space-between"}>
                  <Grid item>
                    <Typography>City: </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Postal/Zip Code: </Typography>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Typography>Country: </Typography>
                </Grid>
                <Grid item container>
                  <Typography>Phone: </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              border="1px solid black"
              marginTop={"20px"}
              //   direction={"row"}
            >
              <Grid
                item
                container
                xs={6}
                direction={"column"}
                borderRight={"1px solid black"}
              >
                <Grid item container padding={"5px"}>
                  <Grid item container>
                    <Typography>Service Type</Typography>
                  </Grid>
                  <Grid item container>
                    <Typography>Product Type</Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  borderTop={"1px solid black"}
                  direction={"column"}
                >
                  <Grid
                    item
                    container
                    justifyContent={"center"}
                    height={"30px"}
                  >
                    <Typography>Shipper's Signature</Typography>
                  </Grid>
                  <Grid item container marginTop="40px">
                    <Typography>
                      Time: {new Date().toLocaleTimeString()}
                    </Typography>
                    <Typography>
                      Date: {new Date().toLocaleDateString()}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container xs={6}>
                <Grid
                  item
                  xs={12}
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  NTL Representative Signature
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ fontSize: "15px", paddingLeft: "5px" }}
                >
                  Lahore
                </Grid>
                <Grid item container xs={12} borderTop="1px solid black">
                  <Grid
                    item
                    container
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "14px",
                    }}
                  >
                    Track this Shipment via
                  </Grid>
                  <Grid
                    item
                    container
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    www.rcsxpress.com
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={6} direction={"column"} padding="0px 10px">
            <Grid
              item
              container
              display={"flex"}
              border="1px solid black"
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Grid item>
                <Typography
                  style={{
                    fontWeight: 900,
                    fontSize: "20px",
                    lineHeight: "20px",
                  }}
                >
                  International Air Waybill
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={Logo1}
                  alt="logo"
                  width={"100px"}
                  height={"70px"}
                  style={{ objectFit: "contain" }}
                />
              </Grid>
            </Grid>
            <Grid item container>
              International Air Waybill
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Print;
