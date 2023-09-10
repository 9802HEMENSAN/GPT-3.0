import React from "react";
import Navbar from "../components/Navbar";
import AdminRoutes from "../routes/AdminRoutes";
import AdminSidebar from "../components/admin/AdminSidebar";

const DashBoard = () => {
  return (
    <div>
    <div style={{ backgroundColor: "red", width: "100%", height: "100vh" }}>
        <h1> Dashboard</h1>
        <div style={{ display : "flex", justifyContent : "space-around" }}>
        <AdminSidebar/>
        </div> 
      </div>
    </div>
  );
};

export default DashBoard;
