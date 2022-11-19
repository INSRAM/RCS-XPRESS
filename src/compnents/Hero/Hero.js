import React, { useState, useEffect } from "react";
import { Grid, Box, Button, InputBase } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Hero.css";
import SimpleSnackbar from "../snackbar/Snackbar";

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
  const [message, setMessage] = useState("");
  const [snackMessage, setsnackMessage] = useState("");
  const [openSnack, setopenSnack] = useState(false);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (!message) {
      setsnackMessage("Tracking Id is not provided!");
      setopenSnack(true);
      console.log("lol it's empty");
    } else if (Number(message) < 0) {
      setsnackMessage("Wrong Input!");
      setopenSnack(true);
      console.log("incorrect input");
    } else {
      console.log("handleClick 👉️", typeof message);
      setMessage("");
    }
  };

  useEffect(() => {
    let openSnackTimeout;
    if (openSnack) {
      openSnackTimeout = setTimeout(() => {
        setopenSnack(false);
      }, 1000);
    }
    return () => {
      clearTimeout(openSnackTimeout);
    };
  }, [openSnack]);
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
            justifyContent={"space-between"}
            direction={{ xs: "column", md: "row" }}
            sx={{
              display: "flex",
              width: "60%",
              height: "100%",
            }}
          >
            <Grid item xs={12} md={8} margin={"10px 0"}>
              <InputBase
                type="number"
                id="tracking_number"
                name="tracking_number"
                onChange={handleChange}
                value={message}
                autoComplete="off"
                placeholder="Enter Tracking Number"
                required
                size="medium"
                sx={{
                  padding: "10px 20px",
                  width: "100%",
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
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              container
              justifyContent={"center"}
              style={{ display: "flex" }}
              margin={"10px 0px"}
            >
              <Button
                variant="outlined"
                size="large"
                onClick={handleClick}
                sx={{
                  padding: "10px 20px",
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
        </Grid>
      </ThemeProvider>

      {openSnack ? (
        <SimpleSnackbar open={openSnack} message={snackMessage} />
      ) : (
        ""
      )}
    </div>
  );
}

export default HeroSection;
