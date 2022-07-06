import { types } from "../types/posts"

const {
  FETCH_DATA_REQUESTED ,
  FETCH_DATA_SUCCEDED,
  FETCH_DATA_FAILED,
  DATA_DELETED
  
} = types




export const fetchDataRequest =()=>(
  
    {
      type:FETCH_DATA_REQUESTED,
     
    }
  
  )
  
export const fetchDataSucces =(Data)=>(
  
    {
      type:FETCH_DATA_SUCCEDED,
      payload:Data
    }
  
  )
  
export const fetchDataFail =(Err)=>(
  
    {
      type:FETCH_DATA_FAILED,
      payload:Err
    }
  
  )