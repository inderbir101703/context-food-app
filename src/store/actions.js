export const removeMealsAction=(data)=>{
    return {
        id:'REMOVE_ITEM',
        payload:data
    }
}
export const incrementMealAction=(data)=>{
    return {
        id:'INCREMENT',
        payload:data
    }
}
export const decrementMealAction=(data)=>{
    return {
        id:'DECREMENT',
        payload:data
    }
}
export const addToCartAction=(data)=>{
    return {
        id:'ADD_TO_CART',
        payload:data
    }
}
export const handleCheckoutAction=()=>{
    return {
        id:'HANDLE_CHECKOUT'
    }
}
export const handleCancelAction=()=>{
    return {
        id:'HANDLE_CANCEL'
    }}