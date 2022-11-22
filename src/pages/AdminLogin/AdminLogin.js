import React, { useState } from "react";
import { Box, Grid, Input, Button } from "@mui/material";
import AdminSection from "../../compnents/AdminSection/AdminSection";

function Login() {
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleAdmin() {
    const userName = "salmanali";
    const userPassword = "rcss123";
    if (!user.length || !password.length) {
      alert("User or Password cannot be empty!");
    } else if (user === userName && password === userPassword) {
      setStatus(true);
    } else {
      alert("Wrong Credentials");
    }
    setUser("");
    setPassword("");
  }

  if (!status) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={"100vh"}
        width={"100%"}
      >
        <Box
          width={"30%"}
          height={"400px"}
          backgroundColor={"#FFFFFF"}
          boxShadow={"0px 10px 13px rgba(17, 38, 146, 0.05)"}
          borderRadius={"8px"}
          padding={"20px"}
        >
          <Box textAlign="center" padding={"10px 0"}>
            Admin Login
          </Box>
          <Box height="50%">
            <Grid
              conatiner
              height={"50%"}
              justifyContent="space-between"
              alignItems={"center"}
              direction={"column"}
              style={{ display: "flex" }}
            >
              <Grid item direction={"column"} margin={"10px 0 "}>
                <Grid
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                    color: "#8A92A6",
                  }}
                >
                  User
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    value={user}
                    onInput={(e) => setUser(e.target.value)}
                    disableUnderline
                    style={{
                      padding: "0px 20px",
                      backgroundColor: "#FFFFFF",
                      width: "300px",
                      height: "44px",
                      borderRadius: "4px",
                      border: "1px solid #C7C7C7",
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item direction={"column"} margin="10px 0">
                <Grid
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                    color: "#8A92A6",
                  }}
                >
                  Password
                </Grid>
                <Grid item>
                  <Input
                    color="primary"
                    value={password}
                    onInput={(e) => setPassword(e.target.value)}
                    type="password"
                    disableUnderline
                    style={{
                      padding: "0px 20px",
                      backgroundColor: "#FFFFFF",
                      width: "300px",
                      height: "44px",
                      borderRadius: "4px",
                      border: "1px solid #C7C7C7",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item margin="30px 0">
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleAdmin}
                  sx={{
                    padding: "10px 20px",
                    borderColor: "#FF6300",
                    background: "#FF6300",
                    borderRadius: "8px",
                    whiteSpace: "nowrap",
                    boxShadow: " 0px 12px 40px -10px rgba(255, 99, 0, 0.8)",
                    color: "white",
                    width: "190px",
                    height: "54px",
                    fontWeight: 700,

                    ":hover": {
                      borderColor: "#FF6300",
                      background: "white",
                      color: "#FF6300",
                    },
                  }}
                >
                  LOG IN
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  }
  return <AdminSection />;
}

export default Login;
