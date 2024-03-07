import { createContext, useReducer } from "react";
import { removeMealsAction,incrementMealAction,decrementMealAction,addToCartAction, handleCheckoutAction, handleCancelAction } from "./actions";
import { mealsReducer } from "./reducer";
export const MealsContext=createContext([])



export default function MealContextProvider({children}){
    const [mealsData,dispatch]=useReducer(mealsReducer,{items:[],quantity:{},stage:null})


const decrementItem=(data)=>dispatch(decrementMealAction(data))
const incrementItem=(data)=>dispatch(incrementMealAction(data))
const removeMeal=(data)=>dispatch(removeMealsAction(data)) 
const addToCart=(data)=>dispatch(addToCartAction(data))
const handleCheckout=()=>dispatch(handleCheckoutAction())
const  handleCancel=()=>dispatch(handleCancelAction())

return <MealsContext.Provider value={{mealsData,decrementItem,incrementItem,removeMeal,addToCart,handleCheckout,handleCancel}}>
    {children}
</MealsContext.Provider>

}

