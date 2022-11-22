import React from "react";
import { Box, Grid, Button, Drawer } from "@mui/material";
import { Add } from "@mui/icons-material";
import AdminNavbar from "../Navbar/AdminNavbar";
import AdminCards from "../Cards/AdminCards";
import CustomerCreation from "../CustomerCreation/CustomerCreation";
import AdminDrawer from "../Drawer/Drawer";
function AdminSection() {
  return (
    <>
      <AdminDrawer />
      <AdminNavbar />
      <Box
        sx={{
          float: "right",
          width: "80%",
        }}
      >
        <Grid container direction={"column"} style={{ marginTop: "50px" }}>
          <Grid item style={{ display: "flex" }}>
            <Grid item container>
              <AdminCards />
            </Grid>
            <Grid item container>
              <AdminCards />
            </Grid>
            <Grid item container>
              <AdminCards />
            </Grid>
            <Grid item container>
              <AdminCards />
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: "30px" }}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Add fontSize={"large"} />}
              sx={{
                padding: "10px 20px",
                borderColor: "#FF6300",
                background: "#FF6300",
                borderRadius: "8px",
                whiteSpace: "nowrap",
                boxShadow: " 0px 12px 40px -10px rgba(255, 99, 0, 0.8)",
                color: "white",
                width: "190px",
                height: "54px",
                fontWeight: 700,

                ":hover": {
                  borderColor: "#FF6300",
                  background: "white",
                  color: "#FF6300",
                },
              }}
            >
              Add Customer
            </Button>
          </Grid>
          <Grid item style={{ marginTop: "30px", marginRight: "20px" }}>
            <CustomerCreation />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AdminSection;
