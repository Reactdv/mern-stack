import { combineReducers } from "redux"



import { 
       CAKE_ORDERED,
       CAKE_RESTOCKED,
       ICECREAM_ORDERED,
       ICECREAM_RESTOCKED
       
  
} from "../types"


const initialCakeState = {
  numOfCakes:10
}


const initialIceCreamState = {
  numOfIceCream:20
}

export const cakeReducer =
(state= initialCakeState,action)=>{
  switch(action.type){
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes:state.numOfCakes - action.payload
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes:state.numOfCakes + action.payload
      }
      default:
      return state
  }
}


export const iceCreamReducer =
(state= initialIceCreamState,action)=>{
  switch(action.type){
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream:state.numOfIceCream - action.payload
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfIceCream:state.numOfIceCream + action.payload
      }
      default:
      return state
  }
}


export const allReducers = combineReducers({
  iceCream:iceCreamReducer,
  cake:cakeReducer
})

