import React , {useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Select, Stack } from '@chakra-ui/react';
import { editProduct } from '../redux/productReducer/action';
 
 
const EditProduct = () => {
    const {id}=useParams()
    const {products}=useSelector((store)=> store.productReducer)
    const [product, setproduct] = useState({});
    const dispatch=useDispatch();

    
  const handlechange=(e)=>{
    const {name,value,type}=e.target;

    const val= type==="number" ? Number(value) : value ;
    
    setproduct((prev)=> {
        return {...prev, [name] : val }
    })
  }

const handleEdit=(e)=>{
    e.preventDefault();
    dispatch(editProduct(product,id))
}

useEffect(()=>{
   let editProduct = products.find((el) => el.id === +id );
   setproduct(editProduct)
},[])

  return (
    <Box bg={'teal.200'} h={"100vh"} >
    <Heading fontSize={30}>Edit Product no : {id} </Heading>
    <Center >
        <form onSubmit={handleEdit}>
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
                    <Select placeholder='Select option'   name="gender" value={product.gender} onChange={handlechange}>
                    <option value='men'>men</option>
                    <option value='women'>women</option>
                    <option value='kids'>kids</option>
                    </Select>
                </FormControl>
                 <Button bg={"green.500"} type="submit" >EDIT PRODUCT</Button>
            </Stack>
        </form>
    </Center>
</Box>
  )
}

export default EditProduct