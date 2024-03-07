import { useContext } from 'react'
import { MealsContext } from '../../store/MealsContext'

import imgPath from '../../assets/logo.jpg' 

const MealItem=({id,image=imgPath,name='',price='',description='delicious item'})=>{
const {addToCart,mealsData,incrementItem }=useContext(MealsContext)
const {quantity}=mealsData
return <div className='meal-item'>
<article>
<img src={`http://localhost:3000/${image}`}  alt="card-nmeal"/>

<h3>{name}</h3>
<p className='meal-item-price'>{price}</p>

<p className='meal-item-description'>{description}</p>
<button className='button meal-item-actions' onClick={()=>{quantity[id]>0? incrementItem({id,name,price}) :addToCart({id,name,price})}}>Add to Cart</button>
</article>
</div>

}
export default MealItem