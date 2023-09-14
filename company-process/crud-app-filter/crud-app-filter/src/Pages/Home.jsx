import React from 'react'
import { Box, Heading } from '@chakra-ui/react';
import ProductList from '../Components/ProductList';
import Sidebar from '../Components/Sidebar';
// http://localhost:8080/products
const Home = () => {
  return (
    <Box> 
      <Heading>Home Page</Heading>
      <Sidebar/>
      <ProductList/>
    </Box>
  )
}

export default Home