import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div style={{ 
      display : "flex", 
      gap : "50px", 
      flexDirection : "column", 
      backgroundColor : "pink",
      color : "white"
    }}> 
      
       <Link to="/admin/time">time</Link>
       <Link to="/admin/patients">patients</Link>
       <Link to="/admin/chat">chat</Link>
    </div>
  )
}

export default AdminSidebar

{/* <Route path="time" element={<Time />}></Route>
<Route path="patients" element={<AllPatients />}></Route>
<Route path="chat" element={<Whatsapp />}></Route> */}