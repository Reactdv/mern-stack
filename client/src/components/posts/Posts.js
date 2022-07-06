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
  const {Data} = useSelector((state)=>state.request)
 
  return (
    <Box>
    
    <Grid container spacing={5}>
    
    {
      Data.map((item)=>{
        
      
        return (
          
          <Grid 
          key={item._id}
       item 
       mobile={12} 
       tablet={6}
       laptop={4}
       >
 
        
       <Post 
        Id={item.id}
        creator={item.creator}
        title={item.title}
        msg={item.message}
        tags={item.tags}
        selectedFile={item.selectedFile}
        createdAt={item.createdAt}
       />
        
       </Grid>  
          
          )
      })
    } 

    </Grid>
    </Box>
    
    )
} 