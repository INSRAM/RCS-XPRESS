import React from "react";
import { Box, Grid } from "@mui/material";
import { CallMade } from "@mui/icons-material";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function AdminCards() {
  return (
    <Box>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        style={{
          width: "230px",
          height: "115px",
          borderRadius: "8px",
          boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
        }}
      >
        <Grid
          item
          xs={6}
          alignItems={"center"}
          justifyContent={"center"}
          style={{ display: "flex" }}
        >
          <Box width={"68px"} height={"68px"}>
            <CircularProgressbarWithChildren value={66}>
              <CallMade style={{ color: "#ADB5BD" }} />
            </CircularProgressbarWithChildren>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          justifyContent={"space-evenly"}
          direction={"column"}
          style={{ display: "flex", height: "80px" }}
        >
          <Box
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"28px"}
            letterSpacing={"0em"}
            color={"#8A92A6"}
          >
            Total User
          </Box>
          <Box
            fontSize={"19px"}
            fontWeight={500}
            lineHeight={"33.25px"}
            letterSpacing={"0em"}
            color={"#232D42"}
          >
            560 K{" "}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminCards;
