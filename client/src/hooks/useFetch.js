import { useEffect,useState } from "react"
import axios from "axios"


function useFetch(endPoint){
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
 const [error,setError] = useState(null)
 
 useEffect(()=>{
  setLoading(true)
  axios
  .get(endPoint)
  .then(res=> setData(res.data))
  .catch(err => setError(err))
  .finally(()=> setLoading(false))
 },[endPoint]) 
  
  return { data,loading,error }
  
}

export default useFetch