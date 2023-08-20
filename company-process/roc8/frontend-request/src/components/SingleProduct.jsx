import react from "react";
 

export const SingleProduct = ({ product }) => {
   
 
  return (
    <div>
        <div> 
            {/* <img src={product.provider_image} alt={product.provider_name} /> */}
 
            <p>{ product?.dmo_percentage?.Ausgrid}</p>
            <img data-testid= {product?.provider?.logo} src={product?.provider?.logo} alt="" />
            <div  dangerouslySetInnerHTML={{ __html: product?.dmo_content?.Ausgrid}}/>
            <button>connect online today</button>
        </div>
    </div>
  );
};
