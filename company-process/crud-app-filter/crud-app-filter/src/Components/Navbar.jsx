import React from 'react'
import { Link } from 'react-router-dom'
import { Center, Square, Circle, HStack } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Center  bg='green.400' h='100px' color='white' fontSize={20} > 
       <HStack spacing={8}> 
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
       </HStack>
    </Center>
  )
}

export default Navbar