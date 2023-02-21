import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getUploadedFiles } from '../../actions/fileAction';
import Hero from '../layout/Hero'

function GetFiles() {
    const dispatch=useDispatch();
    useEffect(() => {
    dispatch(getUploadedFiles())
    }, [dispatch])
    
  return (
    <>
    <Hero text="Your uploaded file details"/>
      klkjl
    </>
  )
}

export default GetFiles

