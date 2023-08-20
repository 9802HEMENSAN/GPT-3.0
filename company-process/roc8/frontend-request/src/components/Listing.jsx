import React from "react";
import { Card } from "./Card";
import {   useState } from "react";

export const Listing = ({ Data }) => {
  const [products, setProducts] = useState(Data );
     console.log(products)
     
     if(products.length < 0 ){
      return <h1>Loading...</h1>  
    }
   
      return <Card  products={products} />;
};
