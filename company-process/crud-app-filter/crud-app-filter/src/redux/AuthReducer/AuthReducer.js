import * as types from "./actionType";

const initState={
    isAuth : false, 
    token : null ,
    isLoading : false,
    isError : false 
}

export const reducer=(state=initState,{type, payload })=>{
    switch (type) {
        case types.LOGIN_REQUEST :
                return { ...state, isLoading : true }

        case types.LOGIN_SUCCESS  : 
              return {...state, isAuth : true , token : payload , 
                isLoading : false , isError : false }        
 
        case types.LOGIN_FAILURE : 
             return {...state , isLoading : false , isError : true }
             
        default:
            return state;
    }
}