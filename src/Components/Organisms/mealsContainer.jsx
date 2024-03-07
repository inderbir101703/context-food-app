import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import MealItem from "../Molecules/mealItems"
const MealsContainer=({})=>{



    const{data,error,loading,fetchData}=useFetch('http://localhost:3000/meals')
useEffect(()=>{fetchData()

},[])


    if(error)
    return <p>met with unexcpected circumstances</p>
if(loading)
return <p>loading...</p>
  

return <main id="meals">
    {data.map((meal)=><MealItem key={meal.id} {...meal} />)}
</main>
}
export default MealsContainer