import { useState } from "react"

function useFetch(url,method='GET'){
const[data,setData]=useState([])
const [error,setEror]=useState(null)
const [loading,setLoading]=useState(true)
  
        async function fetchData(order){
            setLoading(true)
            try{

              let requestBody={
                method
              } 
             if(method==="POST")
             {
                requestBody={method,body:JSON.stringify(order),headers:{
                    'content-type':"application/json"
                }}
             }  
            const response= await fetch(url,requestBody)
            const meals=await response.json()
     
        if(!response.ok){
          throw new Error({message:response.message|| 'failed to get meals data'})  
        }
        setData(meals)
        setLoading(false)
        }
            catch(e){
             setEror({message:e.message||'unexpected ocurred'})
             
            }

        }





return {
    data,
    error,
    loading,
    fetchData
}

}
export default useFetch