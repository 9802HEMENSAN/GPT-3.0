import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ display : "flex", gap : "50px", justifyContent : "space-around" , height : "60px", backgroundColor : "pink" , color : "white", alignItems : "center"}}> 
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
        <Link to="/admin/time">admin</Link>
    </div>
  )
}

export default Navbar