import { Post } from "./post/Post"
import { useSelector } from "react-redux"
import { styles } from "./styles"
import {
      Card,
      CardHeader,
      CardMedia,
      CardActions,
      Typography,
      Button,
      Grid,
      Box,
      CircularProgress
} from "@mui/material"



export const Posts =()=>{
const posts = useSelector(state=> state.posts) 

  return (
!posts.length ?  <CircularProgress />
 : (
    <Box>
    
    <Grid container spacing={5}>
    
      {
        posts.map((post)=>(
         
       <Grid 
       key={post._id}
       item 
       mobile={12} 
       tablet={6}
       laptop={4}
       >
 
        
       <Post 
        post={post}
       />
        
       </Grid>  
          
          
          
          ))
      }
     
    </Grid>
    </Box>
    )
    )
} 