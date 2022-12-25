import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
// import AuthLogin from "./compnents/Auth/AuthLogin";
import AddShipper from "./pages/AddShipper/AddShipper";
import UpdateShipper from "./pages/UpdateShipper/UpdateShipper";
import AdminLogin from "./pages/AdminLogin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            // <AuthLogin>
            <Admin />
            // </AuthLogin>
          }
        />
        <Route
          path="/admin/createshipper"
          element={
            // <AuthLogin>
            <AddShipper />
            // </AuthLogin>
          }
        />
        <Route
          path="/admin/updateshipper"
          element={
            // <AuthLogin>
            <UpdateShipper />
            // </AuthLogin>
          }
        />
        <Route path="/auth/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
