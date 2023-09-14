import * as types from "./actionType";
import axios from "axios";


export const LoginUser=(data) => (dispatch)=>{
    dispatch({type : types.LOGIN_REQUEST});

  return  axios.post("https://reqres.in/api/login",data)
     .then((res)=> {
        console.log(res.data.token);
        dispatch({type : types.LOGIN_SUCCESS, payload : res.data.token })
     })
     .catch((err)=>[
        dispatch({type : types.LOGIN_FAILURE})
     ])

}

