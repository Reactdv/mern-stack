import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme"
import logger from "redux-logger"
import { Provider } from "react-redux"
import  reducers  from "./redux/reducers"
import { applyMiddleware,createStore,compose } from "redux"
import thunk from "redux-thunk"

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk,logger))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
   <Provider store={store}>
     <App />
   </Provider>
  </ThemeProvider>
  
);


