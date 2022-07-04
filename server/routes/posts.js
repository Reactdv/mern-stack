import express from "express"


const getRouter = new express.Router()
const postRouter = new express.Router()
const deleteRouter = new express.Router()
const updateRouter = new express.Router()

getRouter.get("/",(res,req)=>res.send("its working"))


postRouter.post("/",(res,req)=>res.send("its working"))

updateRouter.patch("/",(res,req)=>res.send("its working"))

deleteRouter.delete("/",(res,req)=>res.send("its working"))


export { 
        getRouter,
        postRouter,
        updateRouter,
        deleteRouter
  
}