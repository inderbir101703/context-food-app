import { useRef } from "react";
import { useContext } from "react";
import Header from "./Components/header";
import MealsContainer from "./Components/Organisms/mealsContainer";
import Cart from "./Components/Molecules/Cart";
import Modal from "./Components/Molecules/modal";
import {MealsContext} from "./store/MealsContext";
import PlaceOrderForm from "./Components/Molecules/plcaeOrderForm";
import MealContextProvider from "./store/MealsContext";

function App() {
  const modalRef=useRef()
const { mealsData,handleCancel }=useContext(MealsContext)

// const [choosenMealsData,setChoosenMealsData]=useState({
//   stage:null,
//   quantity:{},
//   items:[]})




// function updateChoosenMealData(meal,operation='increment'){
// setChoosenMealsData((prevMeals)=>{

//   if(operation==='decrement'){
//     if(prevMeals.quantity[meal.id]===1){
//       return {
//         stage:null,
//         quantity:{...prevMeals.quantity,[meal.id]:0},
//         items:prevMeals.items.filter((item)=>item.id!==meal.id)
//       }
//     }
//   return  {
//     ...prevMeals,
//     quantity:{...prevMeals.quantity,[meal.id]:prevMeals.quantity[meal.id]-1}
//    }}
  
// if( prevMeals.quantity[meal.id]>0)
// {
//  return  {
//   ...prevMeals,
//   quantity:{...prevMeals.quantity,[meal.id]:prevMeals.quantity[meal.id]+1}
//  }
// }
//   return {
//     stage:'filled',
//     quantity:{...prevMeals.quantity,[meal.id]:1},
//     items:[ ...prevMeals.items,meal]}
// })

// }

function openModal(){
  modalRef.current.showModal()
}
function closeModal(){

  // setChoosenMealsData((prevData)=>{
  //   return {...prevData,stage:"filled"}
  // })
  handleCancel()
   modalRef.current.close()
}
// function handleCheckout(){
//   setChoosenMealsData((PrevData)=>{
//     return {
//       ...PrevData,
//       stage:'checkout'
//     }
//   })
// }

  return (
    <>
     <Header openModal={openModal}/>
   <Modal ref={modalRef}
  
  >
        {mealsData.stage==='checkout' ?  <PlaceOrderForm closeModal={closeModal} />: <Cart  closeModal={closeModal}/> }
    
       
    
       
     </Modal>
     <MealsContainer />
     </>
  );
}

export default App;
