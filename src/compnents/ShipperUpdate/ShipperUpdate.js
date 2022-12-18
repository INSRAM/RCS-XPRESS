import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Box, Grid, Input, Button, Paper } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { serverUrl } from "../../utils/constants";
import StatusUpdate from "./StatusUpdate";
import AlertDialog from "../../compnents/Modal/AlertDialog";

function ShipperUpdate() {
  const { register, handleSubmit, reset } = useForm();
  const [Shipper, setShipper] = useState(null);
  const [click, setClick] = useState(false);
  const [rows, setRows] = useState([]);
  const [alert_, setalert] = useState(false);

  const onSubmit = async (form_data) => {
    const value = form_data.trackingId;
    if (value.length > 0) {
      setClick(true);
      setalert(false);
      const token = localStorage.getItem("token");
      axios
        .get(`${serverUrl}/findshipper/${value}`, {
          headers: {
            Authorization: token,
          },
        })
        .then(function (response) {
          if (response.data !== null) {
            setShipper(response.data);
            setRows(response.data.status);
            reset();
            setClick(false);
          } else {
            setShipper(null);
            setClick(false);
            setalert(true);
          }
        })
        .catch(function (error) {});
    }
  };

  return (
    <Box borderRadius={"8px"} padding={"20px"}>
      <Grid container direction={"column"}>
        <Grid item style={{ fontWeight: 500, fontSize: "24px" }}>
          Update Shipper
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            item
            justifyContent={"center"}
            style={{
              display: "flex",
              margin: "20px 0px",
            }}
          >
            <Grid
              xs={6}
              md={7}
              justifyContent={"space-between"}
              style={{ display: "flex" }}
            >
              <Paper
                component="form"
                sx={{
                  p: "2px 20px",
                  display: "flex",
                  alignItems: "center",
                  width: "400px",
                  height: "50px",
                }}
              >
                <Input
                  placeholder="Tracking Number"
                  color="primary"
                  type="text"
                  name="trackingId"
                  {...register("trackingId", { required: true })}
                  disableUnderline
                  style={{ width: "100%" }}
                />
              </Paper>
              <Button
                variant="outlined"
                type="submit"
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
                {click ? (
                  <CircularProgress sx={{ color: "inherit" }} />
                ) : (
                  "Search"
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
        {Shipper !== null && (
          <Grid>
            <Grid>
              <Grid item style={{ fontWeight: 500, fontSize: "24px" }}>
                Shipper
              </Grid>
              <Grid
                item
                container
                justifyContent={"space-between"}
                margin={"30px 0px"}
                display={"flex"}
              >
                <Grid item direction={"column"} xs={4}>
                  <Grid
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    Tracking ID :
                  </Grid>
                  <Grid
                    item
                    marginLeft={"20px"}
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "28px",
                      color: "#8A92A6",
                    }}
                  >
                    {Shipper.trackingId}
                  </Grid>
                </Grid>
                <Grid item direction={"column"} xs={4}>
                  <Grid
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    Shipper Name:
                  </Grid>
                  <Grid
                    item
                    marginLeft={"20px"}
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "28px",
                      color: "#8A92A6",
                    }}
                  >
                    {Shipper.shipperName}
                  </Grid>
                </Grid>
                <Grid item direction={"column"} xs={4}>
                  <Grid
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    Shipper Mobile
                  </Grid>
                  <Grid
                    item
                    marginLeft={"20px"}
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "28px",
                      color: "#8A92A6",
                    }}
                  >
                    {Shipper.shipperMobile}
                  </Grid>
                </Grid>
                <Grid item direction={"column"} xs={4}>
                  <Grid
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    Consignee Name :
                  </Grid>
                  <Grid
                    item
                    marginLeft={"20px"}
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "28px",
                      color: "#8A92A6",
                    }}
                  >
                    {Shipper.consigneeName}
                  </Grid>
                </Grid>
                <Grid item direction={"column"} xs={4}>
                  <Grid
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    Weight :
                  </Grid>
                  <Grid
                    item
                    marginLeft={"20px"}
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "28px",
                      color: "#8A92A6",
                    }}
                  >
                    {Shipper.weight}
                  </Grid>
                </Grid>
                <Grid item direction={"column"} xs={4}>
                  <Grid
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    Country :
                  </Grid>
                  <Grid
                    item
                    marginLeft={"20px"}
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "28px",
                      color: "#8A92A6",
                    }}
                  >
                    {Shipper.country}
                  </Grid>
                </Grid>
                <Grid item direction={"column"} xs={4}>
                  <Grid
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    City :
                  </Grid>
                  <Grid
                    item
                    marginLeft={"20px"}
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "28px",
                      color: "#8A92A6",
                    }}
                  >
                    {Shipper.city}
                  </Grid>
                </Grid>
                <Grid item direction={"column"} xs={4}>
                  <Grid
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    State :
                  </Grid>
                  <Grid
                    item
                    marginLeft={"20px"}
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "28px",
                      color: "#8A92A6",
                    }}
                  >
                    {Shipper.state}
                  </Grid>
                </Grid>
                <Grid item direction={"column"} xs={4}>
                  <Grid
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    Zip Code :
                  </Grid>
                  <Grid
                    item
                    marginLeft={"20px"}
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "28px",
                      color: "#8A92A6",
                    }}
                  >
                    {Shipper.zipCode}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* status update */}
            <StatusUpdate rows={rows} />
          </Grid>
        )}
      </Grid>
      {alert_ && (
        <AlertDialog message={"Tracking ID does not exist!"} alert={alert_} />
      )}
    </Box>
  );
}

export default ShipperUpdate;
