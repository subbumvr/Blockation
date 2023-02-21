import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUploadedFiles } from '../../actions/fileAction';
import Hero from '../layout/Hero'

function GetFiles() {
  const {files,loading}=useSelector(state=>state.file)
    const dispatch=useDispatch();
    useEffect(() => {
    dispatch(getUploadedFiles())
    }, [dispatch])
    
    if(files==="You need to add the data"){
      return (
        <>
        <Hero text="Get Your uploaded files here"/>
        </>
      )
    }
    else{
      return(
        <>
        <Hero text="Get Your uploaded files here"/>
        lfdk</>
      )
    }
}

export default GetFiles

