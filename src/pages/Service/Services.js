import React from "react";
import { Box, Grid, Button } from "@mui/material";
import ServiceCard from "./Card";
import ServiceData from "../../data/ServiceData";
import { East } from "@mui/icons-material";
function Services() {
  return (
    <div id="service">
      <Grid
        container
        width={"90vw"}
        direction="column"
        margin={"auto"}
        padding="50px"
        sx={{
          background: "linear-gradient(180deg, #FF8A00 0%, #FF6300 100%)",
          borderRadius: "120px 20px",
          marginTop: "20px",
        }}
      >
        <Grid item container rowSpacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "102px",
                height: "0px",
                border: "1px solid #FFFFFF",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                fontFamily: "Montserrat,Arial",
                textTransform: "uppercase",
                textAlign: "left",
                letterSpacing: " 0.1em",
                color: "#FFFFFF",
                fontSize: { xs: "20px", md: "36px" },
                fontWeight: { xs: 600, md: 800 },
              }}
            >
              Our Services
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                fontFamily: "Montserrat,Arial",
                fontSize: { xs: "12px", md: "20px" },
                fontWeight: { md: 500, xs: 300 },
                lineHeight: "24px",
                letterSpacing: " 0.03em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Find a smart solution that fits your requirement.
            </Box>
          </Grid>
        </Grid>
        <Grid item container xs={12} marginTop={"50px"}>
          {ServiceData.map((data) => {
            return (
              <Grid item xs={12} md={3} marginBottom={"30px"}>
                <ServiceCard
                  title={data.title}
                  desc={data.description}
                  img_={data.img}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12} textAlign={"center"}>
          <Button
            variant="contained"
            style={{
              borderRadius: "35px",
              boxShadow: "0px 32px 54px -12px rgba(16, 24, 40, 0.14)",
              backgroundColor: "#025D9E",
            }}
          >
            Explore Services <East />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
