import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashBoard from "../Pages/DashBoard";
import AdminRoutes from "./AdminRoutes";
import Time from "../components/admin/Time";
import AllPatients from "../components/admin/AllPatients";
import Whatsapp from "../components/admin/Whatsapp";
import AdminSidebar from "../components/admin/AdminSidebar";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/admin"  >
          <Route path="time" element={<Time />}></Route>
          <Route path="patients" element={<AllPatients />}></Route>
          <Route path="chat" element={<Whatsapp />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;

export const routes= [
    {path : "time" , element : "Time"},
    {path : "patients" , element : "AllPatients"},
    {path : "chat" , element : "Whatsapp"}
]
// export const routes = [
//     { name: "Dashboard", href: "/", icon: RiDashboardLine },
//     { name: "WhatsApp", href: "/chat", icon: HiOutlineChat, count: 3 },
//     { name: "Timings", href: "/CreateSlot", icon: HiOutlineCalendar },
//     { name: "All Patients", href: "/allPatients", icon: HiOutlineFolder },
//     { name: "Staff", href: "/staff", icon: BiBasket },
//     { name: "Marketting", href: "/marketing", icon: BiBasket },
//     { name: "Analytics", href: "/analytics", icon: BiBasket },
//     { name: "Customise Form", href: "/customise-form", icon: BiBasket },
//     { name: "Google Profile", href: "/google-profile", icon: BiBasket },
//   ];