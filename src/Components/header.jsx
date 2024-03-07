
import { useContext } from 'react'
import {MealsContext} from '../store/MealsContext'
import imgPath from '../assets/logo.jpg'

function Header({openModal}){
    const {mealsData}=useContext(MealsContext)
    const {items}=mealsData

    return <header id="main-header">
        <span id="title">
        <img src={imgPath} alt="header img"/>
        <h1 >REACT FOOD</h1></span>

        <button className='text-button' onClick={openModal}>CART ({items.length})</button>
    </header>
}

export default Header