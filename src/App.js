import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import AddShipper from "./pages/AddShipper/AddShipper";
import UpdateShipper from "./pages/UpdateShipper/UpdateShipper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/createshipper" element={<AddShipper />} />
        <Route path="/admin/updateshipper" element={<UpdateShipper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
