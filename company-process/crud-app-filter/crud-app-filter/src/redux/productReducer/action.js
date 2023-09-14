import {  PRODUCT_REQUEST , PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS , ADD_PRODUCT_SUCCESS ,  SET_PAGE } from "./actionType";

 import axios from "axios";
const url = `http://localhost:8080/products`;
export const getData=(params,page)=>(dispatch)=>{
    dispatch({type : PRODUCT_REQUEST});

    axios.get(`http://localhost:8080/products?_page=${page}&_limit=5`,{ params })
    .then((res)=> {
        console.log( res.headers.get("x-total-count") )
        dispatch({type : SET_PAGE , payload :  +res.headers.get("x-total-count")})
        dispatch({type : GET_PRODUCT_SUCCESS, payload : res.data})
    })
    .catch((err)=>(
        dispatch({type : PRODUCT_FAILURE})
    ))
}

export const addProduct =(product)=>(dispatch)=>{
    dispatch({type : PRODUCT_REQUEST})

   return axios.post(url , product )
    .then((res)=> {
      
        dispatch({type : ADD_PRODUCT_SUCCESS})
    })
    .then((err)=>{
        dispatch({type : PRODUCT_FAILURE})
    })
}

export const editProduct=(data,id)=>(dispatch)=>{
      dispatch(PRODUCT_REQUEST);

      axios.patch(`http://localhost:8080/products/${id}`, data )
      
}