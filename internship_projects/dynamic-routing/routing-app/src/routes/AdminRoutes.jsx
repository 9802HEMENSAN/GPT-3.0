import React from "react";
import { Route, Routes } from "react-router-dom";
import Time from "../components/admin/Time";
import AllPatients from "../components/admin/AllPatients";
import Whatsapp from "../components/admin/Whatsapp";


const AdminRoutes = () => {
  
  return (
    <Routes>
      <Route path="/admin/time" element={<Time />}></Route>
      <Route path="/admin/patients" element={<AllPatients />}></Route>
      <Route path="/admin/chat" element={<Whatsapp />}></Route>
    </Routes>
  );
};

export default AdminRoutes;
