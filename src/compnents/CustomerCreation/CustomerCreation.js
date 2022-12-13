import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { serverUrl } from "../../utils/constants";
import { Box, Grid, Divider, Input, Button } from "@mui/material";

function CustomerCreation() {
  const preloadedValue = {
    trackingId: Math.floor(
      Math.random() * Math.floor(Math.random() * Date.now())
    ),
  };
  const { register, handleSubmit, reset } = useForm({
    defaultValues: preloadedValue,
  });

  const onSubmit = async (form_data) => {
    axios
      .post(`${serverUrl}/createshipper`, form_data)
      .then(function (response) {
        // setValues(intialValues);
        reset();
        alert("User added successfully.");
      })
      .catch(function (error) {
        alert("Check input field fill which one empty!");
      });
  };
  const staric = <span style={{ color: "red" }}>*</span>;
  return (
    <Box borderRadius={"8px"} padding={"20px"}>
      <Grid container direction={"column"}>
        <Grid item style={{ fontWeight: 500, fontSize: "24px" }}>
          Create a Shipper
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    type="text"
                    disabled={true}
                    name="trackingId"
                    {...register("trackingId")}
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
                  Name {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="shipperName"
                    {...register("shipperName", { required: true })}
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
                  ID Card {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="shipperIdCard"
                    {...register("shipperIdCard", { required: true })}
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
                  Mobile {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="shipperMobile"
                    {...register("shipperMobile", { required: true })}
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
                  Address {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="shipperAddress"
                    {...register("shipperAddress", { required: true })}
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
                  Name {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="consigneeName"
                    {...register("consigneeName", { required: true })}
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
                direction="column"
                xs={4}
                padding={"0px 20px"}
              >
                <Grid
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                    color: "#8A92A6",
                  }}
                >
                  Mobile {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="consigneeMobile"
                    {...register("consigneeMobile", { required: true })}
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
                  Origin {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="origin"
                    {...register("origin", { required: true })}
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
                  Destination {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="destination"
                    {...register("destination", { required: true })}
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
              {/* <Grid item direction={"column"} margin={"20px"}>
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
              </Grid> */}
              <Grid item direction={"column"} margin={"20px"}>
                <Grid
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                    color: "#8A92A6",
                  }}
                >
                  Weight {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="weight"
                    {...register("weight", { required: true })}
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
                  Dimesnions of Shipment {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="dimensionsOfShipment"
                    {...register("dimensionsOfShipment", { required: true })}
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
                    name="serviceType"
                    {...register("serviceType")}
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
                    name="shipmentType"
                    {...register("shipmentType")}
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
                  Address {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="address"
                    {...register("address", { required: true })}
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
                  Country {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="country"
                    {...register("country", { required: true })}
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
                  City {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="city"
                    {...register("city", { required: true })}
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
                  State {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="state"
                    {...register("state", { required: true })}
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
                  ZIP Code {staric}
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    disableUnderline
                    name="zipCode"
                    {...register("zipCode", { required: true })}
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
                  <select
                    {...register("bookedBy", { required: true })}
                    style={{
                      padding: "0px 20px",
                      backgroundColor: "#FFFFFF",
                      width: "250px",
                      height: "44px",
                      borderRadius: "4px",
                      border: "1px solid #C7C7C7",
                    }}
                  >
                    <option value="Salman Ali">Salman Ali</option>
                    <option value="Usman Ali">Usman Ali</option>
                  </select>
                </Grid>
              </Grid>
            </Grid>
            <Grid item conatiner textAlign={"end"}>
              <Button
                variant="outlined"
                size="large"
                type="submit"
                sx={{
                  padding: "10px 20px",
                  borderColor: "#FF6300",
                  background: "#FF6300",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                  boxShadow: " 0px 12px 40px -10px rgba(255, 99, 0, 0.8)",
                  color: "white",
                  width: "250px",
                  height: "44px",
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
        </form>
      </Grid>
    </Box>
  );
}

export default CustomerCreation;
