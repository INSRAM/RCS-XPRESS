import React from "react";
import { Box, Grid, AppBar, InputAdornment, Input, Paper } from "@mui/material";
import { SearchRounded, Person } from "@mui/icons-material";

function AdminNavbar() {
  return (
    <AppBar
      position="static"
      className="Navbar"
      sx={{
        background: "#FFFFFF",
        float: "right",
        width: "85%",
        color: "#232D42",
        backdropFilter: "blur(32px)",
        padding: "16px 32px",
        height: "76px",
        justifyContent: "center",
      }}
    >
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "240px",
            }}
          >
            <Input
              placeholder="Search..."
              color="primary"
              disableUnderline
              startAdornment={
                <InputAdornment position="start">
                  <SearchRounded />
                </InputAdornment>
              }
              style={{ padding: "4px, 16px, 4px, 16px" }}
            />
          </Paper>
        </Grid>
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent={"flex-end"}
          xs={6}
          style={{ dislay: "flex", width: "auto" }}
        >
          <Box
            width={"45px"}
            height={"45px"}
            borderRadius={"50%"}
            bgcolor={"#EDEDED"}
            alignItems="center"
            justifyContent="center"
            display={"flex"}
          >
            <Person />
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            margin={"4px"}
            fontWeight={"500"}
            fontSize={"12px"}
            color={"#878787"}
            width="100px"
          >
            Salman Ali
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default AdminNavbar;
