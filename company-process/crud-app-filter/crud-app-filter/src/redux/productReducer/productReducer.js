

import {  PRODUCT_REQUEST , PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS, SET_PAGE } from "./actionType";

const initstate={
    isLoading : false,
    isError : true,
    products : [],
    totalPage: 1,
}

export const reducer=(state=initstate, {type , payload })=>{
    switch(type){
        case   PRODUCT_REQUEST : 
        return {...state, isLoading : true }
 
        case  PRODUCT_FAILURE : 
           return {...state, isLoading : false , isError : true }
 
        case GET_PRODUCT_SUCCESS :  
          return  {...state, products : [...payload] , isLoading : false , isError : false }
   
        case ADD_PRODUCT_SUCCESS  :
           return {...state,  isLoading : false , isError : false }

        case SET_PAGE : 
           return {...state, totalPage : payload }
        default : 
         return state
    }
}