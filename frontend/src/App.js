import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import React from 'react';
import GetFiles from './components/File/GetFiles.js'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home.js'
import SignUp from "./components/User/SignUp.js"
import SignIn from "./components/User/SignIn.js"
import store  from'./store';
import { laodUser } from "./actions/userAction";
import UploadFiles from './components/File/UploadFiles.js'
import axios from "axios";
axios.defaults.withCredentials=true
function App() {

  React.useEffect(()=>{
store.dispatch(laodUser())
  },[])

  return (
<>
<Header/>
<Router>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/file/getAllFiles" element={<GetFiles/>}/>
  <Route path="/file/uploadFile" element={<UploadFiles/>}/>
  <Route path="/register" element={<SignUp/>}/>
  <Route path="/login" element={<SignIn/>}/>
  
  </Routes>
</Router>
<Footer/>
</>
  );
}

export default App;
