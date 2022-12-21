import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function UserSlip({ shipperData }) {
  const [rows, setRows] = useState(shipperData.status);
  return (
    <Box
      width={"80vw"}
      direction="column"
      margin={"auto"}
      padding="30px"
      sx={{
        background: "white",
        borderRadius: "4px",
        boxShadow: "0px 32px 54px -12px rgba(16, 24, 40, 0.14)",
        border: "2px solid #FF6300",
        marginTop: "40px",
      }}
    >
      <Grid container>
        <Grid width={"100%"} display={"flex"}>
          <Grid item container xs={6} direction={"column"} width={"100%"}>
            <Grid item margin={"10px 0px"}>
              Tracking ID : {shipperData.trackingId}
            </Grid>
            <Grid item margin={"10px 0px"}>
              Shipper Name : {shipperData.shipperName}
            </Grid>
            <Grid item margin={"10px 0px"}>
              Consignee Name : {shipperData.consigneeName}
            </Grid>
          </Grid>
          <Grid
            xs={6}
            justifyContent={"flex-end"}
            display={"flex"}
            direction={"column"}
          >
            <Grid item margin={"10px 0px"}>
              Origin: {shipperData.origin ? shipperData.origin : "Nill"}
            </Grid>
            <Grid item margin={"10px 0px"}>
              Destination :
              {shipperData.destination ? shipperData.destination : "Nill"}
            </Grid>
          </Grid>
        </Grid>
        <Grid item width="100%">
          <Divider />
        </Grid>
        <Grid item margin={"30px 0px"} width="100%">
          <h3>Shipment Update</h3>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>City/Country</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.city_country}>
                    <TableCell component="th" scope="row">
                      {row.city_country}
                    </TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">
                      {new Date(row.time).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="right">
                      {new Date(row.time).toLocaleTimeString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserSlip;
