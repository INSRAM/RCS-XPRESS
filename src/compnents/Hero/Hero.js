import React from "react";
import { Grid, Box, Button, InputBase } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Hero.css";

const theme = createTheme({
  typography: {
    subtitle: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 900,
    },
    button: {
      fontStyle: "italic",
    },
  },
});

function HeroSection() {
  return (
    <div className="hero">
      <ThemeProvider theme={theme}>
        <Grid
          container
          width={"100%"}
          direction="column"
          justifyContent="center"
          alignItems="center"
          marginTop={"80px"}
        >
          <Grid item padding={"20px"}>
            <Box className="looking ">
              looking to <span className="move">move?</span>
            </Box>
          </Grid>
          <Grid item padding={"10px"}>
            <Box className="quality">quality without question.</Box>
          </Grid>
          <Grid item padding={"10px"}>
            <Box className="hassle">
              Your hassle-free delivery experience starts here.
            </Box>
          </Grid>
          <Grid
            item
            padding={"30px"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "60vw",
              height: "15vh",
            }}
          >
            <InputBase
              placeholder="Enter Tracking Number"
              required
              sx={{
                border: "1px solid white",
                padding: "10px 20px",
                width: "40vw",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "53px",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            />
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#FF6300",
                background: "#FF6300",
                borderRadius: "40px",
                whiteSpace: "nowrap",
                boxShadow: " 0px 12px 40px -10px rgba(255, 99, 0, 0.8)",
                color: "white",
                ":hover": {
                  borderColor: "#FF6300",
                  background: "white",
                  color: "#FF6300",
                },
              }}
            >
              Track Result
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default HeroSection;
