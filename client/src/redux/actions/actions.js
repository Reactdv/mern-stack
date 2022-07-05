import { 
       CAKE_ORDERED,
       CAKE_RESTOCKED,
       ICECREAM_ORDERED,
       ICECREAM_RESTOCKED
  
} from "../types"

export const orderCake =(qty)=>(

  {
  type:CAKE_ORDERED,
  payload:qty
  } 
  
)

export const restockCake =(qty )=>(
{
  type:CAKE_RESTOCKED,
  payload:qty
}

)

export const orderIceCream =(qty )=>(
{
  type:ICECREAM_ORDERED,
  payload:qty
}

)

export const restockIceCream =(qty )=>(
{
  type:ICECREAM_RESTOCKED,
  payload:qty
}

)

