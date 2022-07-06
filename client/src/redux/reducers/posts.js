import { combineReducers } from "redux"

import { types } from "../types/posts"

const {
  FETCH_DATA_REQUESTED ,
  FETCH_DATA_SUCCEDED,
  FETCH_DATA_FAILED,
  DATA_DELETED
  
} = types



const initialStatusState = {
  
  loading : false,
  Data :[],
  Err:""
  
}

export const fetchDataReducer =
(state = initialStatusState,action)=>{
  switch (action.type){
    
    case FETCH_DATA_REQUESTED:
      return {
        ...state,
        loading:true
      }
    case FETCH_DATA_SUCCEDED :
      return {
        ...state,
        loading:false,
        Data:action.payload
      }
     case FETCH_DATA_FAILED:
       return {
         ...state,
         Data:[],
         Err:action.payload
       }
     
      default:
      return state
    
    
  }
  
  
}

export const allReducers = combineReducers({
  request:fetchDataReducer,
  
 
})
