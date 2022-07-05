
import axios from "axios"
import thunkMiddleware from "redux-thunk"
import  useFetch  from "../../hooks/useFetch"
import { getData } from "../../api/Api"
import { createStore,applyMiddleware } from "redux"
import { allReducers } from "../reducers/posts"
import logger from "redux-logger"
import { 
       fetchDataRequest,
       fetchDataSucces,
       fetchDataFail
} from "../actions/posts"

const FetchData =()=>{
   
   return function(dispatch){
     axios
     .get("http://localhost:5000/get")
     .then(res=>{
        const Data = res.data
        dispatch(fetchDataSucces(Data))
     })
     .catch(err => {
       const Err = err.message
       dispatch(fetchDataFail(Err))
     })
  
   }
}


export const store = createStore(
  
  allReducers,
  applyMiddleware(logger,thunkMiddleware)
  
)


const unsubscribe = store.subscribe(()=>{})
store.dispatch(FetchData())
unsubscribe()