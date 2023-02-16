//Remember to delete the conole log statements


const express=require('express');
const minimist=require('minimist');
const {Web3Storage,getFilesFromPath} =require('web3.storage')
const router=express.Router()
const formidable=require('formidable');
const  auth=require('../middlewares/auth')
const fileUpload=require("../models/fileUpload")
router.get('/sendfile',auth,(req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname+'/index.html')
  })
  
  router.post('/sendfile',auth,(req,res)=>{
    const form=new formidable.IncomingForm();
  
    form.parse(req)
  
    form.on('fileBegin', function (name, file){
    console.log(file.originalFilename)
  });
  
  form.on('file',async function (name, file){
  
    const token =process.env.Web3_TOKEN;
    console.log(token)
    const args = minimist(token)
    const gettoken = args.token
  
    const storage = new Web3Storage({ token })
    const pathFiles=await getFilesFromPath(file.filepath)
  console.log(pathFiles)
    console.log('Uploaded ' + file);
  
    const cid = await storage.put(pathFiles);
    console.log('Content added with CID:', cid)
     
     console.log(file.filepath)
     console.log(file.newFilename)
     console.log(req.user.id+"This is your user id")
     const uploadedFile=await new fileUpload({
      user:req.user.id,
      fileName:file.newFilename,
      cid:cid
     })
     await uploadedFile.save();
     console.log(uploadedFile)
     res.redirect('/')
  });
  
  
  })

  module.exports=router