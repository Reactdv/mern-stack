import express from "express"
import { postModel } from "../models/posts.js"


const postRoutes = async(req,res)=>{
  const title = req.body.title
  const creator = req.body.creator
  const message = req.body.message
  const selectedFile = req.body.selectedFile
  const tags = req.body.tags
  
  const insertData = new postModel({
    title:title,
    creator:creator,
    message:message,
    selectedFile:selectedFile,
    tags:tags

  })
  try {
    await insertData.save()
    console.log(insertData)
  }catch(e){
    console.log(e)
  }
}


const getRoutes = async(req,res)=>{
  postModel.find({},(err,result)=>{
    if(err){
      res.send(err)
    }
    res.send(result)
  })
}

export { postRoutes,getRoutes }
