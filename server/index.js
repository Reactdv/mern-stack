import cors from "cors"
import bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"
import { 
        getRouter,
        postRouter,
        updateRouter,
        deleteRouter
} from "./routes/posts.js"



  const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json({
  limit:"100mb",
  extended:true
}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


const PORT = process.env | 5000

const CONNECTION_URL = "mongodb+srv://jerlly:123@cluster0.drssnvm.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true

})
.then(app.listen(PORT,()=>console.log(`running on port: ${PORT}`)))
.catch(err => console.log(err))


app.use("/get",getRouter)
