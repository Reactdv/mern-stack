import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme"

import { Provider } from "react-redux"
import { store } from "./redux/store/posts"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
   <Provider store={store}>
     <App />
   </Provider>
  </ThemeProvider>
  
);


