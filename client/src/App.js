import { retriever } from "./helpers/retrieveData"
import { Posts } from "./components/posts/Posts"
import './App.css';
import Form from "./components/form/Form"
import { 
      Container,
      Paper,
      AppBar,
      Typography,
      Box
  
} from "@mui/material"
import memories from "./assets/images/memories.png"
import { styles } from "./styles"
import  useFetch  from "./hooks/useFetch"
import { getData } from "./api/Api"

const {
    section_padding,
    section_margin,
    row,
    col,
    flex_center,
    between

} = styles



function App() {

  
   return (
    <Container 
     sx={[
       flex_center,
       section_padding,
       col
      
       ]}
     >
     <Paper
     maxWidth="md"
     >
      <AppBar 
      sx={[
        
        flex_center,
        row,
        between,
        section_padding,
        {bgcolor:"clr_pink.main"}
        ]}
       position="static"
      color="inherit"
       >
       <Typography variant="h4">
        Memories
       </Typography>
       <img 
       height="50px"
       width="50px"
       src={memories} 
       />
     </AppBar>
      <Form />
     </Paper>
     
     <Paper sx={section_padding}>
     
        <Posts />
    
     </Paper>
    </Container>
  );
}

export default App;
