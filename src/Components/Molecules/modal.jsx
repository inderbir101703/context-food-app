import { forwardRef } from "react"
import { createPortal } from "react-dom"

const Modal = forwardRef(function Modal({closeModal,handlePrimary,primaryText='proceed', children,...props},ref){

   return createPortal(<dialog ref={ref} className="modal" onClose={closeModal} >
{children}

   </dialog>,document.getElementById('modal') )
})
export default Modal