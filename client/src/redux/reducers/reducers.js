

import { 
       CAKE_ORDERED 
  
} from "../types"


const initialState = {
  numOfCakes:10
}

export const reducers =
(state= initialState,action)=>{
  switch(action.type){
    case CAKE_ORDERED:
      return {
        numOfCakes:state.numOfCakes -1
      }
      default:
      return state
  }
}
