import { pink,blueGrey } from "@mui/material/colors"


import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    clr_pink: {
      main:pink[500],
      light:pink[300],
      dark:pink[700],
      
    },
   light_clr:{
    
    main: blueGrey[50],
    secondary:blueGrey[100],
    tertiary:blueGrey[300]
   }
    
  },
  breakpoints:{
    
      values: {
      mobile: 0,
      tablet: 680,
      laptop: 1000,
      desktop: 1500,
    },
  }
  
});