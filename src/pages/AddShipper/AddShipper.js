import React from "react";
import { Box, Grid } from "@mui/material";
import CustomerCreation from "../../compnents/CustomerCreation/CustomerCreation";
import AdminDrawer from "../../compnents/Drawer/Drawer";

function AddShipper() {
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
          <CustomerCreation />
        </Grid>
      </Box>
    </>
  );
}

export default AddShipper;
