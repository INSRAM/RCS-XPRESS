import React from "react";
import { Box, Grid, Input, Button, Paper } from "@mui/material";
function ShipperUpdate() {
  return (
    <Box
      // backgroundColor={"#FFFFFF"}
      // boxShadow={"0px 10px 13px rgba(17, 38, 146, 0.05)"}
      borderRadius={"8px"}
      padding={"20px"}
    >
      <Grid container direction={"column"}>
        <Grid item style={{ fontWeight: 500, fontSize: "24px" }}>
          Update Shipper
        </Grid>
        <Grid
          item
          justifyContent={"center"}
          style={{
            display: "flex",
            margin: "20px 0px",
          }}
        >
          <Grid
            xs={6}
            md={7}
            justifyContent={"space-between"}
            style={{ display: "flex" }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 20px",
                display: "flex",
                alignItems: "center",
                width: "400px",
                height: "50px",
              }}
            >
              <Input
                placeholder="Tracking Number"
                color="primary"
                disableUnderline
                style={{ width: "100%" }}
              />
            </Paper>
            <Button
              variant="outlined"
              size="large"
              sx={{
                padding: "10px 20px",
                borderColor: "#FF6300",
                background: "#FF6300",
                borderRadius: "8px",
                whiteSpace: "nowrap",
                boxShadow: " 0px 12px 40px -10px rgba(255, 99, 0, 0.8)",
                color: "white",
                width: "100px",
                height: "54px",
                fontWeight: 700,

                ":hover": {
                  borderColor: "#FF6300",
                  background: "white",
                  color: "#FF6300",
                },
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShipperUpdate;
