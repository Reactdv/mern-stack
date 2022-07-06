import axios from "axios"
import { useState,useEffect } from "react"
import moment from "moment"
import {
      Card,
      CardHeader,
      CardContent,
      CardMedia,
      CardActions,
      Typography,
      Button,
      Grid,
      Box
} from "@mui/material" 
import chad from "../../../assets/images/chad.jpg"

import { styles } from "./styles"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';



export const Post =( postsData )=>{
  const [isLiked,setIsLiked] = useState(false)

const { createdAt,title,creator,selectedFile,msg,tags,Id } = postsData



const handleDelete =(id)=>{
  axios
  .delete(`localhost:5000/delete/:${id}`)
  
}

let id = Id

  const handleLike =()=>{
    setIsLiked(like=> !like)
  }
  return (
    
   <Card sx={{
     position:"relative"
     
   }}
    >
     <CardMedia
     sx={styles.media}
     component="image"
     image={selectedFile}
     />
     <Typography 
     sx={{
       position:'absolute',
       top:"10px",
       left:"10px"
     }}
     color="common.white"
     variant="h4">
      {creator}
     </Typography>
     <Box sx={{
       position:"absolute",
       top:"10px",
       right:"10px",
       color:"common.white"
     }}>
     <MoreHorizIcon 
     />
     </Box>
     
     <Typography 
     sx={{
       position:"absolute",
       top:"50px",
       left:"10px",
       fontWeight:"light"
     }}
     color="common.white"
     variant="subtile2">
      {moment(createdAt).fromNow()}
     </Typography>
     <CardContent>
       <Typography 
       color="light_clr.tertiary"
       variant="subtitle1">
        {tags.map(tag=> `#${tag}`)}
       </Typography>
       
       <Typography 
       
       variant="h4">
        {title}
       </Typography>
       <Typography 
       paragraph={true}
       >
        {msg}
 
       </Typography>
     </CardContent>
     <CardActions 
     sx={{
       display:"flex",
       flex:1,
       flexDirection:"row",
       justifyContent:'space-between',
       alignItems:"center"
     }}>
       <Button onClick={handleLike}>
         {
           isLiked?
           <ThumbUpIcon  />
           :
           <ThumbUpOutlinedIcon  />
         } 
       </Button>
       
       <Button 
       onClick={()=>handleDelete(id)}
       color="error">
         <DeleteIcon  />
       </Button>
     </CardActions>
   </Card> 
    )
}