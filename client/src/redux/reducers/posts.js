import { createSlice } from "@reduxjs/toolkit"

import { 
     FETCH_ALL, 
     CREATE, 
     UPDATE, 
     DELETE, 
     LIKE,
     UPDATEID,
     DELETEBYID
  
} from '../types/posts';

const reducer =(posts=[],action)=>{
  switch(action.type){
   
    case FETCH_ALL:
      return action.payload;
      
    case LIKE :
      return posts.map((post)=>(
        post._id === action.payload._id ?
        action.payload : post

        ))
    
    case CREATE:
      return [...posts,action.payload]
    
    case UPDATE:
      
      return posts.map((post)=>(
        post._id === action.payload ? action.payload : post
        
        ))
        
    
    case DELETE:
      return posts.filter((post)=> post._id !== action.payload)
      
    default :
    return posts
  }
}

export default reducer


export const currentId =
(state = null ,action )=>{
  switch(action.type){
    case UPDATEID :
    return state = action.payload
    case DELETEBYID :
      return state =  action.payload
    default :
    return state
  }
}
