import { useContext } from "react"
import useFetch from "../../hooks/useFetch"
import {MealsContext} from "../../store/MealsContext"
import UserInput from "../atoms/input"

function PlaceOrderForm({closeModal}){

    const {mealsData}=useContext(MealsContext)
    const{items,quantity}=mealsData
    const {data:postedData,error:postedError,fetchData:submitOrder}=useFetch('http://localhost:3000/orders','POST')

    async function handlePlacingOrder(event){
        event.preventDefault()
      const fdata=new FormData(event.target)
      let customer={quantity:quantity}
      for(let [key,value] of fdata){
       customer[key]=value
      }
      const reqBody={
       order:{
    quantity,
        items:items,
      customer
      }}
      submitOrder(reqBody)
      
      }
      if(postedError)
      return <p>Order Could not be placed</p>
      if(postedData.message)
    return <form id="submitOrder" onSubmit={handlePlacingOrder}>
       {!postedData.message && <> <UserInput id="name" type="text" name="name" required >Full Name</UserInput>
       <UserInput id="email" type="email"  name="email" required >E-mail Address</UserInput>
       <UserInput id="street" type="text" name="street" required >Street</UserInput>
       <span className="control-row">
       <UserInput id="postalCode" type="text" name="postal-code" required >Postal Code</UserInput>
       <UserInput id="city" type="text" name="city" required >City</UserInput></span></>}
       {postedData.message}
       <div className="modal-actions">
    <button className="text-button" type="reset" onClick={closeModal}>cancel</button>
    {!postedData.message && <button className="button" id="submitOrder" type="submit">Submit Order</button>}

</div>
    </form>
}
export default PlaceOrderForm