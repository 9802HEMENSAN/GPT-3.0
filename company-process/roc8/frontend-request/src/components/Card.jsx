import * as React from "react";
import { SingleProduct } from "./SingleProduct";

export function Card({ products}) {
  
  
  return (
    <div data-testid="product-card" >
      {
        products.length > 0 && products?.slice(0,2)?.map((product) => {
          return <SingleProduct key={product.id} product={product} />
        })
      }
    </div>
  );
}
