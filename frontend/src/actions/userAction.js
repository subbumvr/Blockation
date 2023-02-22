
import axios from 'axios'
import {LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS} from "../constants/userConstants"

//Login User
export const login=(email,password)=>async (dispatch)=>{
    try{
        dispatch({type:LOGIN_REQUEST})
        
    const config = { headers: { "Content-Type": "application/json" } };
        const {data}=await axios.post(
            `http://localhost:7000/auth/login`,
            {email,password},
            config
        )
        dispatch({type:LOGIN_SUCCESS,payload:data.user})
    }catch(error){
        dispatch({type:LOGIN_FAIL,payload:error.response.data.message})
    }
}


//Logout  user details
export const logout=()=>async (dispatch)=>{
    try{

     await axios.get(`http://localhost:7000/auth/logout`);


        
        dispatch({type:LOGOUT_SUCCESS})
    }catch(error){
        dispatch({type:LOGOUT_FAIL,payload:error.response.data.message})
    }
}


//Load user details
export const laodUser=()=>async (dispatch)=>{
    try{
        dispatch({type:LOAD_USER_REQUEST})
        
   
        const {data}=await axios.get(`http://localhost:7000/auth/me`);

console.log(data)
        
        dispatch({type:LOAD_USER_SUCCESS,payload:data.userDetails})
    }catch(error){
        dispatch({type:LOAD_USER_FAIL,payload:error.response.data.message})
    }
}
