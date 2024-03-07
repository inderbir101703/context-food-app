import { useContext } from "react"
import { MealsContext } from "../../store/MealsContext"
const Cart=({closeModal})=>{
    const {mealsData,decrementItem,incrementItem,removeMeal,handleCheckout}=useContext(MealsContext)
const{items,quantity}=mealsData
let  total=0
for(let item of items){
total+=item.price*quantity[item.id]
}
    return <div className="cart">

        <h2>YOUR CART</h2>
        {items.length>0 ? <ul>
            {items.map((item)=><li className="cart-item" key={item.id}>
                <p>{item.name} - {quantity[item.id]} X ${item.price}</p>
                <span className="cart-item-actions ">
                    <button onClick={()=>{incrementItem({id:item.id,name:item.name,price:item.price})}}>+</button>
                    <p>{quantity[item.id]} </p>
                    <button onClick={()=>{ (quantity[item.id] && quantity[item.id]===1) ? removeMeal({id:item.id,name:item.name,price:item.price}) :decrementItem({id:item.id,name:item.name,price:item.price})}}>-</button>
                    </span></li>)}
            
                    
        </ul>: <p>please select a item</p>}
        <p className="cart-total">${total}</p>
        <div className="modal-actions">
    <button className="text-button" type="reset" onClick={closeModal}>cancel</button>
    <button className="button" id="submitOrder" type="submit" disabled={items.length===0} onClick={handleCheckout}>Proceed To checkout</button>

</div>
    </div>
}
export default Cart