import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import AdminNavbar from "../Navbar/AdminNavbar";
import AdminCards from "../Cards/AdminCards";
function AdminSection() {
  return (
    <>
      <AdminNavbar />
      <Box
        sx={{
          float: "right",
          width: "85%",
        }}
      >
        <Grid container direction={"column"}>
          <Grid item style={{ margin: "50px 50px 0px 50px", display: "flex" }}>
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
          <Grid item style={{ margin: "50px 50px 0px 50px" }}>
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
        </Grid>
      </Box>
    </>
  );
}

export default AdminSection;
