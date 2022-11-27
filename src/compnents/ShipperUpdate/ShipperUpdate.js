import React, { useState } from "react";
import axios from "axios";
import { serverUrl } from "../../utils/constants";
import {
  Box,
  Grid,
  Input,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const intialValues = {
  city_country: "",
  status: "",
};

function ShipperUpdate() {
  const [value, setValue] = useState("");
  const [Shipper, setShipper] = useState(null);
  const [InputField, setInputField] = useState(intialValues);
  const [rows, setRows] = useState([]);
  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  const searchShipper = (event) => {
    event.preventDefault();
    if (value.length > 0) {
      axios
        .get(`${serverUrl}/findshipper/${value}`)
        .then(function (response) {
          if (response.data !== null) {
            setShipper(response.data);
            setRows(response.data.status);
          } else {
            setShipper(null);
            alert("Tracking ID does not exist!");
          }
        })
        .catch(function (error) {
          console.log("error ==>", error);
        });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputField({
      ...InputField,
      [name]: value,
    });
  };
  const saveUpdate = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(InputField).every((x) => x.length > 0);

    if (isEmpty) {
      InputField["time"] = Date.now();
      setRows([...rows, InputField]);
      setInputField(intialValues);
    }
  };

  const updateStatus = (e) => {
    e.preventDefault();
    axios
      .patch(`${serverUrl}/updateshipper/${Shipper.trackingId}`, rows)
      .then(function (response) {
        if (response.status === 200) {
          alert("Shipper Status is updated!");
        }
      })
      .catch(function (error) {
        alert("Error in updating status!");
      });
  };
  return (
    <Box borderRadius={"8px"} padding={"20px"}>
      <Grid container direction={"column"}>
        <Grid item style={{ fontWeight: 500, fontSize: "24px" }}>
          Update Shipper
        </Grid>
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
                type="number"
                onChange={handleInputChange}
                name="trackingId"
                disableUnderline
                style={{ width: "100%" }}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 10);
                }}
              />
            </Paper>
            <Button
              variant="outlined"
              onClick={searchShipper}
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
              Search
            </Button>
          </Grid>
        </Grid>
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
            <Grid>
              <Grid item style={{ fontWeight: 500, fontSize: "24px" }}>
                Update Status
              </Grid>
              <Grid
                item
                container
                justifyContent={"space-between"}
                alignItems={"center"}
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
                    Country/City
                  </Grid>
                  <Grid item>
                    <Input
                      value={InputField.city_country}
                      onChange={handleChange}
                      name="city_country"
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
                    Status
                  </Grid>
                  <Grid item>
                    <Input
                      color="primary"
                      disableUnderline
                      value={InputField.status}
                      onChange={handleChange}
                      name="status"
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
                  <Grid item marginTop={"30px"}>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={saveUpdate}
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
            </Grid>
            <Grid>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="status table">
                  <TableHead>
                    <TableRow>
                      <TableCell>City/Country</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {row.city_country}
                        </TableCell>
                        <TableCell>{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid
              margin={"40px 20px"}
              justifyContent={"flex-end"}
              display={"flex"}
            >
              <Button
                variant="outlined"
                onClick={updateStatus}
                size="large"
                sx={{
                  padding: "10px 20px",
                  borderColor: "#FF6300",
                  background: "#FF6300",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                  boxShadow: " 0px 12px 40px -10px rgba(255, 99, 0, 0.8)",
                  color: "white",
                  width: "200px",
                  height: "54px",
                  fontWeight: 700,

                  ":hover": {
                    borderColor: "#FF6300",
                    background: "white",
                    color: "#FF6300",
                  },
                }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default ShipperUpdate;
