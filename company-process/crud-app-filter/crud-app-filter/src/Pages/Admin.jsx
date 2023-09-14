import { Box, Button, Center, Heading, Select, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productReducer/action';

const initState = {
    image: "",
    title: "",
    price: "",
    category: "",
    discount: "",
    gender: ""
}
 
const Admin = () => {
    const [product, setProduct] = useState(initState);
    const [added, setAdded] = useState("")
    const dispatch=useDispatch();

const handlechange=(e)=>{
    const {name, value , type }=e.target;
   console.log(name, value , type )
    const val=type==="number" ? Number(value) : value ;

    setProduct({...product, [name] : val})
}

    const handleAddProduct=(e)=>{
        e.preventDefault();
        console.log(product)
        dispatch(addProduct(product)).then(()=> setAdded("Product Added Successfully !!"));
        setProduct(initState)
    }

  
    return (
        <Box bg={'teal.200'} h={"100vh"} >
            <Heading fontSize={30}>ADD Products</Heading>
            <Heading>{added}</Heading>
            <Center >
                <form onSubmit={handleAddProduct}>
                    <Stack w={500}>
                        <FormControl>
                            <FormLabel>image</FormLabel>
                            <Input type='text'  name="image" value={product.image} onChange={handlechange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>title</FormLabel>
                            <Input type='text'  name="title" value={product.title} onChange={handlechange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Price</FormLabel>
                            <Input type='number'  name="price" value={product.price} onChange={handlechange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <Input type='text'  name="category" value={product.category} onChange={handlechange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Discount</FormLabel>
                            <Input type='number'  name="discount" value={product.discount} onChange={handlechange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <Select placeholder='Select option' name="gender" value={product.gender} onChange={handlechange}>
                            <option value='men'>men</option>
                            <option value='women'>women</option>
                            <option value='kids'>kids</option>
                            </Select>
                        </FormControl>
                         <Button bg={"green.500"} type="submit" >ADD PRODUCT</Button>
                    </Stack>
                </form>
            </Center>
        </Box>
    )
}

export default Admin


