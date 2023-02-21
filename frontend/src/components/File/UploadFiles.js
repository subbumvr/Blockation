import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uploadFiles } from '../../actions/fileAction';
import Hero from '../layout/Hero'
function UploadFiles() {
    const [upload, setUpload] = useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(uploadFiles(upload));
      };
    const formDataChange = (e) => {
       
          const reader = new FileReader();
    
          reader.onload = () => {
            if (reader.readyState === 2) {
              console.log(reader.result);
              setUpload(reader.result);
            }
          };
    
          reader.readAsDataURL(e.target.files[0]);
       
      };
  return (
    <>
      <Hero text="Upload Your Files Here"/>
      <form action="http://localhost:7000/file/sendfile" method="post" enctype="multipart/form-data">
        <input type="file" name="upload" multiple />
        <input type="submit" value="upload"/>
    </form>
    </>
  )
}

export default UploadFiles
