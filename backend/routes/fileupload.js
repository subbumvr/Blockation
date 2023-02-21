//Remember to delete the conole log statements


const express=require('express');
const minimist=require('minimist');
const {Web3Storage,getFilesFromPath} =require('web3.storage')
const router=express.Router()
const formidable=require('formidable');
const  auth=require('../middlewares/auth')
const fileUpload=require("../models/fileUpload");
const { count } = require('../models/fileUpload');
router.get('/sendfile',auth,(req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname+'/index.html')
  })
  
  router.post('/sendfile',auth,async(req,res)=>{
    const form=new formidable.IncomingForm();
let add=0;
let count=0;
    form.parse(req)
  
    form.on('fileBegin', async function  (name, file){
  
    
  });
 console.log(count)
  
  form.on('file',async function (name, file){
  
    const token =process.env.Web3_TOKEN;
   
    const args = minimist(token)
    const gettoken = args.token
  
    const storage = new Web3Storage({ token })
    const pathFiles=await getFilesFromPath(file.filepath)
  // console.log(pathFiles)
    // console.log('Uploaded ' + file);
  
    const cid = await storage.put(pathFiles);
    // console.log('Content added with CID:', cid)
     
      // console.log(file.filepath)
      // console.log(file.newFilename)
      add=add+1;
    //   console.log(add);
    // console.log(req.user.id+"This is your user id")
     const uploadedFile=await new fileUpload({
      user:req.user.id,
      originalfileName:file.originalFilename,
      newfileName:file.newFilename,
      cid:cid
     })
     await uploadedFile.save();
      // console.log(uploadedFile)
   if(count===1){
    res.redirect("http://localhost:3000/file/getAllFiles")
   }
   count=count+1;
  });
  
  
  })

  module.exports=router