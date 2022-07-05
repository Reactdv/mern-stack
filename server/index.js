import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"

import { postModel } from "./models/posts.js"
import { getRouter,postRouter } from "./routes/posts.js"

const app = express()
app.use(cors())
const PORT = process.env | 5000
const CONNECTION_URL = 'mongodb+srv://jerlly:123@cluster0.wbujg6r.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

app.use(express.json())
app.use(bodyParser.json({
  
  extended:true,
  limit:"500mb"

}))
app.use(bodyParser.urlencoded({
  
  extended:true,
  limit:"500mb"

}))

app.listen(PORT,()=>console.log(`running on port: ${PORT}`))



app.use("/get",getRouter)
app.use("/post",postRouter)