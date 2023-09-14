import { Button } from '@chakra-ui/react';
import React from 'react'
import {Link as RouterLink} from "react-router-dom"
const ProductCard = ({image, title, category , price, discount, id , gender}) => {
  return (
    <div > 
        <img src={image}/>
        <h3>{title}</h3>
        <h3>{category}</h3>
        <h3>{price}</h3>
        <h3>{discount}</h3>
        <h3>{gender}</h3>
        <RouterLink to={`/edit/${id}`}>
        <Button  bg={"red"} >EDIT</Button>
        </RouterLink>
    </div>
  )
}

export default ProductCard;

// {
//     "image": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1676714868_8718439.jpg?format=webp&w=300&dpr=1.3",
//     "title": "DC: Batman Beyond",
//     "category": "Oversized T-Shirts",
//     "price": 999,
//     "id": 1,
//     "discount": 10,
//     "gender": "men"
//   },