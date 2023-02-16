const googleUser=require('../models/googleUser');
const localUser=require("../models/localUser");
const ErrorHandler = require('../utils/errorhander');
const fileUpload=require('../models/fileUpload')
//complete that function on later on

exports.getUserDetails=async(req,res,next)=>{
        if(req.user.displayName){
            const googleUserDetails=await googleUser.find({googleID:req.user.id})
            res.status(200).json({
                success:true,
                googleUserDetails
            })
        }
        else if(req.user.password){
            const localUserDetails=await localUser.findById({_id:req.user._id})
            res.status(200).json({
                success:true,
                localUserDetails
            })
        }
        else{
            next(new ErrorHandler("could not find the user",400))
        }
}

//To get the data of the uploaded file by the user
exports.getUploadedFileDetails=async(req,res,next)=>{
    if(req.user.displayName){
    const uploadedFiles=await fileUpload.find({user:req.user.id});
    if(uploadedFiles.length===0){
        res.status(200).json({
            success:false,
            message:"You don't have uploaded any file please upload your files"
        })
    }

    else{
        res.status(201).json({
            success:true,
            message:"Data fetched successfully",
            uploadedFiles
        })
    }
}
else{
    
    const uploadedFiles=await fileUpload.find({user:req.user._id});
    if(uploadedFiles.length===0){
        res.status(200).json({
            success:false,
            message:"You don't have uploaded any file  please upload your files"
        })
    }

    else{
        res.status(201).json({
            success:true,
            message:"Data fetched  successfully",
            uploadedFiles
        })
    }
}
}