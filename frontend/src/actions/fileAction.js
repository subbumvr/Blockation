import { GET_FILES_FAIL, GET_FILES_REQUEST, GET_FILES_SUCCESS, UPLOAD_FILE_FAIL, UPLOAD_FILE_REQUEST, UPLOAD_FILE_SUCCESS } from "../constants/fileConstants";

import axios from "axios";


//All uploaded file details by the user
export const getUploadedFiles=(currentPage=1,keyword="")=>async (dispatch)=>{
    try{
        dispatch({type:GET_FILES_REQUEST})
        
   console.log(currentPage)
        const {data}=await axios.get(`http://localhost:7000/auth/me/uploadedfiles?page=${currentPage}&keyword=${keyword}`);

console.log(data)
        if(data.success===true){
        dispatch({type:GET_FILES_SUCCESS,payload:data.uploadedFiles,fileCount:data.fileCount,resultPerPage:data.resultPerPage})
        }
        else{
            dispatch({type:GET_FILES_SUCCESS,payload:"You need to add the data"})
        }
    }catch(error){
        dispatch({type:GET_FILES_FAIL,payload:error.response.data.message})
    }
}

//Upload Files 

export const uploadFiles=(upload)=>async (dispatch)=>{
    try{
        dispatch({type:UPLOAD_FILE_REQUEST})
        
   
        const config = { headers: { "Content-Type": "application/form-data" } };
        const {data}=await axios.post(
            `http://localhost:7000/file/sendfile`,
            upload,
            config
        )
        console.log(data)
        dispatch({type:UPLOAD_FILE_SUCCESS,payload:data})
    }catch(error){
        console.log(error)
        dispatch({type:UPLOAD_FILE_FAIL,payload:error.response.data.message})
    }
}