import React, { useState } from "react";
import axios from "axios";
import { serverUrl } from "../../utils/constants";
import { Box, Grid, Divider, Input, Button } from "@mui/material";

const intialValues = {
  trackingId: "",
  shipperName: "",
  shipperIdCard: "",
  shipperMobile: "",
  shipperAddress: "",
  consigneeName: "",
  consigneeMobile: "",
  origin: "",
  destination: "",
  places: "",
  weight: "",
  dimensionsOfShipment: "",
  serviceType: "",
  shipmentType: "",
  address: "",
  country: "",
  city: "",
  state: "",
  zipCode: "",
  bookedBy: "",
};

function CustomerCreation() {
  const [values, setValues] = useState(intialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitInputData = (event) => {
    event.preventDefault();

    axios
      .post(`${serverUrl}/createshipper`, values)
      .then(function (response) {
        setValues(intialValues);
        alert("User added successfully.");
      })
      .catch(function (error) {
        alert("Check input field fill which one empty!");
      });
  };
  return (
    <Box borderRadius={"8px"} padding={"20px"}>
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
                  type="number"
                  value={values.trackingId}
                  onChange={handleInputChange}
                  name="trackingId"
                  disableUnderline
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "#FFFFFF",
                    width: "250px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #C7C7C7",
                  }}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
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
              Shipper Details
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
                Name
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  onChange={handleInputChange}
                  value={values.shipperName}
                  name="shipperName"
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
                ID Card
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  onChange={handleInputChange}
                  value={values.shipperIdCard}
                  name="shipperIdCard"
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
                Mobile
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  onChange={handleInputChange}
                  value={values.shipperMobile}
                  name="shipperMobile"
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
                  onChange={handleInputChange}
                  value={values.shipperAddress}
                  name="shipperAddress"
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
          </Grid>
          <Grid
            item
            alignItems={"center"}
            justifyContent={"center"}
            style={{ display: "flex" }}
          >
            <Grid xs={2} style={{ fontWeight: 600, fontSize: "16px" }}>
              Consignee Details
            </Grid>
            <Grid xs={11}>
              <Divider />
            </Grid>
          </Grid>
          <Grid
            item
            container
            // justifyContent={"space-between"}
            margin={"20px 0px"}
          >
            <Grid item container xs={4} direction="column" padding={"0 20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Name
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  onChange={handleInputChange}
                  value={values.consigneeName}
                  name="consigneeName"
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
            <Grid item container direction="column" xs={4} padding={"0px 20px"}>
              <Grid
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                  color: "#8A92A6",
                }}
              >
                Mobile
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  onChange={handleInputChange}
                  value={values.consigneeMobile}
                  name="consigneeMobile"
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
                  onChange={handleInputChange}
                  value={values.origin}
                  name="origin"
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
                  onChange={handleInputChange}
                  value={values.destination}
                  name="destination"
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
                  onChange={handleInputChange}
                  value={values.places}
                  name="places"
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
                  onChange={handleInputChange}
                  value={values.weight}
                  name="weight"
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
                  onChange={handleInputChange}
                  value={values.dimensionsOfShipment}
                  name="dimensionsOfShipment"
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
                  onChange={handleInputChange}
                  value={values.serviceType}
                  name="serviceType"
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
                  onChange={handleInputChange}
                  value={values.shipmentType}
                  name="shipmentType"
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
                  onChange={handleInputChange}
                  value={values.address}
                  name="address"
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
                  onChange={handleInputChange}
                  value={values.country}
                  name="country"
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
                  onChange={handleInputChange}
                  value={values.city}
                  name="city"
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
                  onChange={handleInputChange}
                  value={values.state}
                  name="state"
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
                  onChange={handleInputChange}
                  value={values.zipCode}
                  name="zipCode"
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
                  onChange={handleInputChange}
                  value={values.bookedBy}
                  name="bookedBy"
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
              onClick={submitInputData}
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
