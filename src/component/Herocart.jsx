import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add, plus }  from "../store/expenseSlice"


function Herocart({product}) {
  const cart=useSelector((state)=>state.cart)
  
  const dispatch = useDispatch()

  const handleclick =() =>{
    let x = cart.filter(item=> item.id===product.id)
    if(x.length){
    dispatch(plus({
      ...product,
      count:x[0].count+1
    }))
      x=[]
    }else{
    
    dispatch(add(product))}
    
  }
    return (
    <div className="product">
    <img src={product.image} alt=""/>
    <h3><b> TITLE : {product.title} </b> </h3>
    <span>
       <p> <b> PRICE : {product.price } </b> </p> 
       <button className="add_cart" onClick={()=>handleclick(product)} >Add to cart</button>
    </span>
</div>
  )
}

export default Herocart