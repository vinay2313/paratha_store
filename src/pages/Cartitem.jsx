import React from 'react'
import { useDispatch} from 'react-redux'
import {plus, remove} from "../store/expenseSlice"

export default function Cartitem({cart}) {

   const {image , title , price , id,count} = cart

   const dispatch = useDispatch()
  
 
   const handleremove = () =>{
     dispatch(remove(id))
   }
   
    
  return (
     <div className="product">
        <img src={image} alt=""/>
        <h4> <b> {title} </b></h4>
        <span>
           <h3> <b> Price :{price} </b> </h3> 
           <div><span><button className='QTYBTN'  onClick={()=>dispatch(plus({
            ...cart,
            count: count+1
           }))} >+</button></span><span>{count}</span><span><button
           onClick={()=>{
            if(count>1)dispatch(plus({
               ...cart,
               count: count-1
              }))
           }}
            >-</button></span></div>
           <button className="add_cart" onClick={()=>handleremove(id)} >REMOVE</button>
        </span>
    </div>
  )
}
