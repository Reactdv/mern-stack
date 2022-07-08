import axios from "axios"
import { useState,useEffect } from "react"
import moment from "moment"
import { useDispatch,useSelector } from "react-redux"
import { updateId,deleteById,deletePost } from "../../../redux/actions/posts"

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



export const Post =( {post} )=>{

const currentId = 
useSelector(state=>state.currentId)
 const [isLiked,setIsLiked] = useState(false)
  
const handleLike =()=> 
setIsLiked(like=>!like)  
const dispatch = useDispatch()
 
const handleUpdate =()=>{
  dispatch(updateId(post._id))
  
}

const handleDelete =()=>{
  dispatch(deleteById(post._id))
  dispatch(deletePost(currentId))
}

console.log(deletePost())

  return (
    
   <Card sx={{
     position:"relative"
     
   }}
    >
     <CardMedia
     sx={styles.media}
     component="image"
     image={post.selectedFile}
     />
     <Typography 
     sx={{
       position:'absolute',
       top:"10px",
       left:"10px"
     }}
     color="common.white"
     variant="h4">
      {post.creator}
     </Typography>
     <Button 
      onClick={handleUpdate}
     sx={{
       position:"absolute",
       top:"10px",
       right:"10px",
       color:"common.white"
     }}>
     <MoreHorizIcon 
     />
     </Button>
     
     <Typography 
     sx={{
       position:"absolute",
       top:"50px",
       left:"10px",
       fontWeight:"light"
     }}
     color="common.white"
     variant="subtile2">
      {moment(post.createdAt).fromNow()}
     </Typography>
     <CardContent>
       <Typography 
       color="light_clr.tertiary"
       variant="subtitle1">
        {post.tags.map(tag=>`#${tag}`)}
       </Typography>
       
       <Typography 
       variant="h4">
         {post.title}
       </Typography>
       <Typography 
       paragraph={true}
       >
    
         {post.message}
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
        onClick={handleDelete}
       color="error">
         <DeleteIcon  />
       </Button>
     </CardActions>
   </Card> 
    )
}