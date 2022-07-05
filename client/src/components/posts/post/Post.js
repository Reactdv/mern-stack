import { useState,useEffect } from "react"
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



export const Post =()=>{
  const [isLiked,setIsLiked] = useState(false)
  
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
     image={chad}
     />
     <Typography 
     sx={{
       position:'absolute',
       top:"10px",
       left:"10px"
     }}
     color="common.white"
     variant="h4">
       Creator
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
      date ago
     </Typography>
     <CardContent>
       <Typography 
       color="light_clr.tertiary"
       variant="subtitle1">
        Tags
       </Typography>
       
       <Typography 
       
       variant="h4">
        Title
       </Typography>
       <Typography 
       paragraph={true}
       >
        djddkdjdkdndjdndjdjd
dkdkddkk
djddkdkdkd
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
       
       <Button color="error">
         <DeleteIcon  />
       </Button>
     </CardActions>
   </Card> 
    )
}