import React, { Component } from "react";
import { Box, Grid, Typography } from "@mui/material";
class Print extends Component {
  render() {
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
                <Typography sx={{ fontSize: "20px" }}>Tracking ID: </Typography>
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
                hello
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            hello
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Print;
