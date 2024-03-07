import { useReducer } from "react";

export const mealsReducer=(prevState,action)=>{
const meal={...action.payload}
    switch(action.id){
        case 'REMOVE_ITEM':{
            return {
                  stage:null,
                    quantity:{...prevState.quantity,[meal.id]:0},
                    items:prevState.items.filter((item)=>item.id!==meal.id)}
        
        }
        case 'DECREMENT':
            {
             return {
                ...prevState,
                quantity:{...prevState.quantity,[meal.id]:prevState.quantity[meal.id]-1}
             }
            }
            case 'INCREMENT':{
                return {...prevState,
                    quantity:{...prevState.quantity,[meal.id]:prevState.quantity[meal.id]+1}}
            }
            case 'ADD_TO_CART':{
            
                return {...prevState,
                    items:[...prevState.items,action.payload],
                    quantity:{...prevState.quantity,[meal.id]:1}}
            }
            case 'HANDLE_CHECKOUT':{
                return {
                    ...prevState,
                    stage:'checkout'
                }
            }
            case 'HANDLE_CANCEL':{
                return {
                    ...prevState,
                    stage:'filled'
                }
            }
            default:
                return prevState
    }
}