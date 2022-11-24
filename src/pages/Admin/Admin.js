import React from "react";
import { useCookies } from "react-cookie";
import Login from "../AdminLogin/AdminLogin";
import AdminSection from "../../compnents/AdminSection/AdminSection";

function Admin() {
  const [cookies, setCookie] = useCookies(["user"]);
  if (cookies.user === undefined) {
    return (
      <>
        <Login />
      </>
    );
  }
  return <AdminSection />;
}

export default Admin;
