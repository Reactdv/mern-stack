import { configureStore } from "@reduxjs/toolkit"
import { createStore } from "redux"
import { reducers } from "./reducers/reducers"
import { orderCake } from "./actions/actions"


export const store = createStore(reducers)


const unsubscribe = store.subscribe(()=>console.log(store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()