import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import EditProduct from './EditProduct'
import Home from './Home'
import Login from './Login'

const AllRoutes = () => {
  return (
    <div> 
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/edit/:id" element={      
            <EditProduct/>
 
            }></Route>
            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes