import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
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

function StatusUpdate({ rows }) {
  const { register, handleSubmit, reset } = useForm();
  const staric = <span style={{ color: "red" }}>*</span>;
  const updateSubmission = async (form_data) => {
    console.log("for data ==>", form_data);
  };
  return (
    <div>
      <Grid>
        <Grid item style={{ fontWeight: 500, fontSize: "24px" }}>
          Update Status
        </Grid>
        {/* <StatusUpdate /> */}
        <form onSubmit={handleSubmit(updateSubmission)}>
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
                Country/City {staric}
              </Grid>
              <Grid item>
                <Input
                  name="city_country"
                  {...register("city_country", { required: true })}
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
                Status {staric}
              </Grid>
              <Grid item>
                <Input
                  color="primary"
                  disableUnderline
                  // value={InputField.status}
                  // onChange={handleChange}
                  name="status"
                  {...register("status", { required: true })}
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
                  type="submit"
                  // onClick={saveUpdate}
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
        </form>
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
      <Grid margin={"40px 20px"} justifyContent={"flex-end"} display={"flex"}>
        <Button
          variant="outlined"
          //   onClick={updateStatus}
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
    </div>
  );
}

export default StatusUpdate;
