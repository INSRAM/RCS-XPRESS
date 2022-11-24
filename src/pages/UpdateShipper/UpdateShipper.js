import React from "react";
import { Box, Grid } from "@mui/material";
import AdminDrawer from "../../compnents/Drawer/Drawer";
import ShipperUpdate from "../../compnents/ShipperUpdate/ShipperUpdate";

function UpdateShipper() {
  return (
    <>
      <AdminDrawer />
      <Box
        sx={{
          float: "right",
          width: "80%",
        }}
      >
        <Grid container direction={"column"}>
          <ShipperUpdate />
        </Grid>
      </Box>
    </>
  );
}

export default UpdateShipper;
