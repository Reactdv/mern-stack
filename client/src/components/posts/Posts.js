import { Post } from "./post/Post"

import { styles } from "./styles"
import {
      Card,
      CardHeader,
      CardMedia,
      CardActions,
      Typography,
      Button,
      Grid,
      Box
} from "@mui/material"



export const Posts =()=>{
  
  return (
    <Box>
    
    <Grid container spacing={5}>
    
       <Grid 
       item 
       mobile={12} 
       tablet={6}
       laptop={4}
       >
       <Post />
       </Grid>
    
       <Grid 
       item 
       mobile={12} 
       tablet={6}
       laptop={4}
       >
       <Post />
       </Grid>
    
       <Grid 
       item 
       mobile={12} 
       tablet={6}
       laptop={4}
       >
       <Post />
       </Grid>
       
       <Grid 
       item 
       mobile={12} 
       tablet={6}
       laptop={4}
       >
       <Post />
       </Grid>
       
    </Grid>
    </Box>
    
    )
} 