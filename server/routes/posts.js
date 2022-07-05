import express from "express"
import { 
         postRoutes,
         getRoutes
         
} from "../controllers/posts.js"

const getRouter = new express.Router()
const postRouter = new express.Router()
const deleteRouter = new express.Router()
const updateRouter = new express.Router()

getRouter.get("/",getRoutes)

postRouter.post("/",postRoutes)

updateRouter.patch("/",(res,req)=>res.send("its working"))

deleteRouter.delete("/",(res,req)=>res.send("its working"))


export { 
        getRouter,
        postRouter,
        updateRouter,
        deleteRouter
  
}