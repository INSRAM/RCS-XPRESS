import React from "react";
import { Box, Grid, Divider, Input, Button } from "@mui/material";

function CustomerCreation() {
  return (
    <Box
      // backgroundColor={"#FFFFFF"}
      // boxShadow={"0px 10px 13px rgba(17, 38, 146, 0.05)"}
      borderRadius={"8px"}
      padding={"20px"}
    >
      <Grid container direction={"column"}>
        <Grid item style={{ fontWeight: 500, fontSize: "24px" }}>
          Create a Shipper
        </Grid>
        <Grid item margin={"30px 0px"}>
          <Grid
            item
            alignItems={"center"}
            justifyContent={"center"}
            style={{ display: "flex" }}
          >
            <Grid xs={2} style={{ fontWeight: 600, fontSize: "16px" }}>
              Billing Details
            </Grid>
            <Grid xs={11}>
              <Divider />
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent={"space-between"}
            margin={"20px 0px"}
          >
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Tracking ID
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                From (Shipper)
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                To (Consignee)
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            alignItems={"center"}
            justifyContent={"center"}
            style={{ display: "flex" }}
          >
            <Grid xs={2} style={{ fontWeight: 600, fontSize: "16px" }}>
              Shipment Details
            </Grid>
            <Grid xs={11}>
              <Divider />
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent={"space-between"}
            margin={"20px 0px"}
          >
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Origin
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Destination
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Places
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Weight
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Dimesnions of Shipment
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Service Type
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Shipment Type
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction={"column"}
              margin={"20px"}
              width={"100%"}
            >
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Address
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Country
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                City
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                State
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                ZIP Code
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            alignItems={"center"}
            justifyContent={"center"}
            style={{ display: "flex" }}
          >
            <Grid xs={2} style={{ fontWeight: 600, fontSize: "16px" }}>
              Booking Details
            </Grid>
            <Grid xs={11}>
              <Divider />
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent={"space-between"}
            margin={"20px 0px"}
          >
            <Grid item direction={"column"} margin={"20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Booked By
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item conatiner textAlign={"end"}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                padding: "10px 20px",
                borderColor: "#FF6300",
                background: "#FF6300",
                borderRadius: "8px",
                whiteSpace: "nowrap",
                boxShadow: " 0px 12px 40px -10px rgba(255, 99, 0, 0.8)",
                color: "white",
                width: "100px",
                height: "54px",
                fontWeight: 700,

                ":hover": {
                  borderColor: "#FF6300",
                  background: "white",
                  color: "#FF6300",
                },
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CustomerCreation;
