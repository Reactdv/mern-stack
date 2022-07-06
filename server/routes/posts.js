import express from "express"
import { 
         postRoutes,
         getRoutes,
         deleteRoutes
         
} from "../controllers/posts.js"

const getRouter = new express.Router()
const postRouter = new express.Router()
const deleteRouter = new express.Router()
const updateRouter = new express.Router()

getRouter.get("/",getRoutes)

postRouter.post("/",postRoutes)

updateRouter.patch("/",(res,req)=>res.send("its working"))

deleteRouter.delete("/",deleteRoutes)


export { 
        getRouter,
        postRouter,
        updateRouter,
        deleteRouter
  
}