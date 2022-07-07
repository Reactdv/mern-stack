import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { createPost } from "../../redux/actions/posts"

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


const {
    section_padding,
    section_margin,
    row,
    col,
    flex_center,
    between

} = styles


const Form =()=>{
 
  
const [postData,setPostData] = useState({
  
  creator:"",
  tittle:"",
  message:"",
  tags:"",
  selectedFile:""
  
})

const dispatch = useDispatch()

const handleSubmit =()=>{
  dispatch(createPost(postData))
}
const clear =()=> 
setPostData({
  title:"",
  creator:"",
  message:"",
  tags:"",
  selectedFile:""
})

  return (
    <Container 
    sx={section_padding}
    maxWidth="laptop">
 
  <form>
  
    <TextField
    type="text"
    label="Creator"
    fullWidth
    margin="dense"
    value={postData.creator}
    onChange={(e)=>setPostData({
      ...postData,
      creator:e.target.value
    })}
    />
    
    <TextField
    type="text"
    label="Title"
    fullWidth
    margin="dense"
    value={postData.title}
    onChange={(e)=>setPostData({
      ...postData,
      title:e.target.value
    })}
    />
    
    <TextField
    type="text"
    label="Message"
    fullWidth
    margin="dense"
    multiline
    rows={7}
    value={postData.message}
    onChange={(e)=>setPostData({
      ...postData,
      message:e.target.value
    })}
    />
    
    <TextField
    type="text"
    label="Tags"
    fullWidth
    margin="dense"
    multiline
    rows={4}
    value={postData.tags}
    onChange={(e)=>setPostData({
      ...postData,
      tags:e.target.value
    })}
    />
    
    <FileBase64
    multiple={ false }
   onDone={({base64})=>setPostData({
      ...postData,
      selectedFile:base64
    })}
   />
    
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
     onClick={clear}
     color="error"
     variant="contained"
     fullWidth
     sx={[
       section_padding
       ]}
     >
      Clear
    </Button>
    
  </form>
  </Container>
  )
}

export default Form 