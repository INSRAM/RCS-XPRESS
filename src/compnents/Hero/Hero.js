import React, { useState } from "react";
import { Grid, Box, Button, InputBase } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm } from "react-hook-form";
import { serverUrl } from "../../utils/constants";
import AlertDialog from "../../compnents/Modal/AlertDialog";
import axios from "axios";

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

function HeroSection({ onChangeShipperState }) {
  const { register, handleSubmit, reset } = useForm();
  const [click, setClick] = useState(false);
  const [alert_, setalert] = useState(false);

  const trackResult = async (data_) => {
    setClick(true);
    setalert(false);
    axios
      .get(`${serverUrl}/findshipper/${data_.tracking_number}`)
      .then(function (response) {
        if (response.data) {
          setClick(false);
          onChangeShipperState(response.data);
          reset();
        } else {
          setClick(false);
          setalert(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          <form onSubmit={handleSubmit(trackResult)}>
            <Grid
              container
              justifyContent={"space-between"}
              direction={{ xs: "column", md: "row" }}
              sx={{
                display: "flex",
                width: { xs: "350px", md: "700px" },
                height: "100%",
              }}
            >
              <Grid item xs={12} md={8} margin={"10px 0"}>
                <InputBase
                  name="tracking_number"
                  {...register("tracking_number", { required: true })}
                  placeholder="Enter Tracking Number"
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
                alignItems={"center"}
                style={{ display: "flex" }}
                margin={"10px 0px"}
              >
                <Button
                  variant="outlined"
                  type="submit"
                  sx={{
                    width: "150px",
                    height: "50px",
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
                  {click ? (
                    <CircularProgress sx={{ color: "inherit" }} />
                  ) : (
                    "Track Result"
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </ThemeProvider>
      {alert_ && (
        <AlertDialog message={"Tracking ID does not exist!"} alert={alert_} />
      )}
    </div>
  );
}

export default HeroSection;
