import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import AdminNavbar from "../Navbar/AdminNavbar";
import AdminCards from "../Cards/AdminCards";
import AdminDrawer from "../Drawer/Drawer";
import { serverUrl } from "../../utils/constants";

const columns = [
  { id: "trackingId", label: "TrackingID", minWidth: 170 },
  { id: "shipperName", label: "Shipper Name", minWidth: 100 },
  {
    id: "shipperIdCard",
    label: "Shipper ID Card",
    minWidth: 170,
    align: "right",
  },
  {
    id: "shipperMobile",
    label: "Shipper Mobile",
    minWidth: 170,
    align: "right",
  },
  {
    id: "shipperAddress",
    label: "Shipper Address",
    minWidth: 170,
    align: "right",
  },
  {
    id: "consigneeName",
    label: "Consignee Name",
    minWidth: 170,
    align: "right",
  },
  {
    id: "consigneeMobile",
    label: "Consignee Mobile",
    minWidth: 170,
    align: "right",
  },
  {
    id: "weight",
    label: "weight",
    minWidth: 170,
    align: "right",
  },
  {
    id: "dimensionsOfShipment",
    label: "Dimensions Of Shipment",
    minWidth: 170,
    align: "right",
  },
  {
    id: "address",
    label: "Address",
    minWidth: 170,
    align: "right",
  },
  {
    id: "country",
    label: "Country",
    minWidth: 170,
    align: "right",
  },
  {
    id: "city",
    label: "City",
    minWidth: 170,
    align: "right",
  },
  {
    id: "bookedBy",
    label: "Booked By",
    minWidth: 170,
    align: "right",
  },
];

function AdminSection() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState(null);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetchShippers(); // Fetch games when component is mounted
  }, []);
  const fetchShippers = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${serverUrl}/allshippers`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        const data = res.data;
        data.sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
        setRows(data);
      })
      .catch((err) => {
        console.log("this is error ==>", err);
      });
  };
  return (
    <>
      <AdminDrawer />
      <AdminNavbar />
      <Box
        sx={{
          float: "right",
          width: "80%",
        }}
      >
        <Grid container direction={"column"} style={{ marginTop: "50px" }}>
          <Grid item style={{ display: "flex" }}>
            <Grid item container>
              <AdminCards />
            </Grid>
            <Grid item container>
              <AdminCards />
            </Grid>
            <Grid item container>
              <AdminCards />
            </Grid>
            <Grid item container>
              <AdminCards />
            </Grid>
          </Grid>
          <Grid item container direction={"column"}>
            <Grid
              margin={"30px 0px"}
              style={{ fontWeight: 900, fontSize: "30px" }}
            >
              Users
            </Grid>
            {rows !== null ? (
              <Grid item container xs={12} width={"100%"} paddingRight={"30px"}>
                <Paper
                  sx={{
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="Shippers Table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </Grid>
            ) : (
              <div style={{ textAlign: "center" }}>
                <CircularProgress sx={{ color: "inherit" }} />
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AdminSection;
