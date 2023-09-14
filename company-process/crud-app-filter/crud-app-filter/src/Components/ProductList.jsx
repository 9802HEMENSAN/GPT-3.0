import React, { useEffect , useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getData } from '../redux/productReducer/action';
import {useSearchParams,useLocation} from "react-router-dom";
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductList = () => {
  const [ searchParams]= useSearchParams();
  const [page, setpage] = useState(1)
  const location= useLocation();
    const dispatch=useDispatch();
    const {products}= useSelector((store)=> store.productReducer)
      //  alert(searchParams.getAll("gender"));
    //  alert(searchParams.get("order"))
      
     const params = {
          gender : searchParams.getAll("gender"), 
          _sort : searchParams.get("order") && "price",
          _order : searchParams.get("order")
        }
     
   console.log(location)
      // console.log(obj)

    useEffect(() => {
      dispatch(getData(params,page));      
    }, [location.search])
 
  return (
    <div>
    <div style={{ display : "grid" ,  gridTemplateColumns : "repeat(3, 1fr)"}}> 
        {
            products.length > 0 && products.map((item)=> (
                <ProductCard key={item.id} {...item} />
            ))
        }
    </div>
    <div>
      <Pagination  page={page} setpage = {setpage} />
    </div>
    </div>
  )
}

export default ProductList