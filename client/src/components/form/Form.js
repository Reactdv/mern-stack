import { useState } from "react"

import useFetch  from "../../hooks/useFetch"
import axios from "axios"
import {
      Card,
      Box,
      Button,
      Input,
      Paper,
      TextField,
      Container,
      Typography
      
       
} from "@mui/material"
import { styles } from "../../styles"
import FileBase64 from 'react-file-base64';
import { 
        createData, 
        getData,
        deleteData
  
} from "../../api/Api"

const {
    section_padding,
    section_margin,
    row,
    col,
    flex_center,
    between

} = styles


const Form =()=>{
  const { data,loading,error } = useFetch(getData)
  const [title,setTitle] = useState("")
  const [creator,setCreator] = useState("")
  const [message,setMessage] = useState("")
  const [tags,setTags] = useState([])
  const [selectedFile,setSelectedFile] = useState("")

console.log(selectedFile)

const handleSubmit =()=>{
  axios.post(createData,{
    title:title,
    creator:creator,
    message:message,
    tags:tags,
    selectedFile:selectedFile

  })
}
  
if(error){
  console.log(error)
}
if(loading){
  return 
  <h1>loading...</h1>
  
}
 

  return (
    <Container 
    sx={section_padding}
    maxWidth="laptop">
 
  <form>
  
    <TextField
    type="text"
    label="Creator"
    fullWidth
    value={creator}
    onChange={(e)=>
    setCreator(e.target.value)}
    margin="dense"
    
    />
    
    <TextField
    type="text"
    label="Title"
    fullWidth
    value={title}
    onChange={(e)=>
    setTitle(e.target.value)}
    margin="dense"
    
    />
    
    <TextField
    type="text"
    label="Message"
    fullWidth
    value={message}
    onChange={(e)=>
    setMessage(e.target.value)}
    margin="dense"
    multiline
    rows={7}
    />
    
    <TextField
    type="text"
    label="Tags"
    fullWidth
    value={tags}
    onChange={(e)=>
    setTags(e.target.value)}
    margin="dense"
    multiline
    rows={4}
    />
    
    <FileBase64
    multiple={ false }
   onDone={({base64})=>setSelectedFile(base64)} />
    
    <Button
     onClick={handleSubmit}
     variant="contained"
     fullWidth
     sx={[
       section_padding,
       {
         my:"10px"
       }
       ]}
     >
      Submit
    </Button>
    
    <Button

     color="error"
     variant="contained"
     fullWidth
     sx={[
       section_padding
       ]}
     >
      Submit
    </Button>
    
  </form>
  </Container>
  )
}

export default Form 