import { Box, Button } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
 


const Pagination = ({page,setpage}) => {
 
    const {totalPage}=useSelector((store)=> store.productReducer )
    let  AllPages = Math.ceil(totalPage/5 )
    let Arr=new Array(AllPages).fill(0);

  return (
    <Box> 
        {
          Arr.map((e,index)=>(
            <Button bg={page===(index+1) ? "red" : "green"}
            onClick={()=> setpage(index+1)}>{index+1}</Button>
          ))
        }
    </Box>
  )
}

export default Pagination