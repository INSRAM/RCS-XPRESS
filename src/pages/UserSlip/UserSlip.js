import React from "react";
import { Box, Divider, Grid, Card } from "@mui/material";

function UserSlip({ shipperData }) {
  let rows = shipperData.status;
  return (
    <Box
      width={"80vw"}
      direction="column"
      margin={"auto"}
      padding="30px"
      sx={{
        background: "white",
        borderRadius: "4px",
        boxShadow: "0px 32px 54px -12px rgba(16, 24, 40, 0.14)",
        border: "2px solid #FF6300",
        marginTop: "40px",
      }}
    >
      <Grid container>
        <Grid width={"100%"} display={"flex"}>
          <Grid item container xs={6} direction={"column"} width={"100%"}>
            <Grid item margin={"10px 0px"}>
              Tracking ID : {shipperData.trackingId}
            </Grid>
            <Grid item margin={"10px 0px"}>
              Shipper Name : {shipperData.shipperName}
            </Grid>
            <Grid item margin={"10px 0px"}>
              Consignee Name : {shipperData.consigneeName}
            </Grid>
          </Grid>
          <Grid
            xs={6}
            justifyContent={"flex-end"}
            display={"flex"}
            direction={"column"}
          >
            <Grid item margin={"10px 0px"}>
              Origin: {shipperData.origin ? shipperData.origin : "Nill"}
            </Grid>
            <Grid item margin={"10px 0px"}>
              Destination :
              {shipperData.destination ? shipperData.destination : "Nill"}
            </Grid>
          </Grid>
        </Grid>
        <Grid item width="100%">
          <Divider />
        </Grid>
        <Grid item margin={"30px 0px"} width="100%">
          <h2>Shipment Update</h2>
          <Card>
            <Box sx={{ width: "100%", padding: "20px 0px" }}>
              <Grid container>
                <Grid
                  item
                  container
                  display={"flex"}
                  fontSize="20px"
                  fontWeight={700}
                >
                  <Grid item xs={5} paddingLeft="10px">
                    City/Country
                  </Grid>
                  <Grid item xs={3}>
                    Status
                  </Grid>
                  <Grid item xs={2} style={{ textAlign: "center" }}>
                    Time
                  </Grid>
                  <Grid item xs={2} style={{ textAlign: "center" }}>
                    Date
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>

                {rows.map((row) => {
                  return (
                    <Grid
                      item
                      container
                      display={"flex"}
                      fontSize="14px"
                      fontWeight={700}
                      marginTop={"30px"}
                    >
                      <Grid item xs={5} paddingLeft="10px">
                        {row.city_country}
                      </Grid>
                      <Grid item xs={3}>
                        {row.status}
                      </Grid>
                      <Grid item xs={2} style={{ textAlign: "center" }}>
                        {new Date(row.time).toLocaleTimeString()}
                      </Grid>
                      <Grid item xs={2} style={{ textAlign: "center" }}>
                        {new Date(row.time).toLocaleDateString()}
                      </Grid>
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserSlip;
