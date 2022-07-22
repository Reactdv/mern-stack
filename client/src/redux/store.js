import { configureStore } from "@reduxjs/toolkit"
import { createStore,applyMiddleware } from "redux"
import { allReducers } from "./reducers/reducers"
import logger from 'redux-logger'
import { reduxLogger } from "redux-logger"
import { 
       orderCake,
       restockCake
  
} from "./actions/actions"



export const store = createStore(
  allReducers,
  applyMiddleware(logger)
)


const unsubscribe = store.subscribe(()=>{})

store.dispatch(orderCake(1))
store.dispatch(orderCake(1))
store.dispatch(orderCake(1))
store.dispatch(restockCake(5))

unsubscribe()

