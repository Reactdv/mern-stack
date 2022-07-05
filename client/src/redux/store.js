import { configureStore } from "@reduxjs/toolkit"
import { createStore } from "redux"
import { allReducers } from "./reducers/reducers"
import { 
       orderCake,
       restockCake
  
} from "./actions/actions"




export const store = createStore(allReducers)


const unsubscribe = store.subscribe(()=>console.log(store.getState()))

store.dispatch(orderCake(1))
store.dispatch(orderCake(1))
store.dispatch(orderCake(1))
store.dispatch(restockCake(5))

unsubscribe()

