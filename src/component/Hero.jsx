import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import Herocart from './Herocart'
import data from '../Record'

export default function Hero() {
 return (

    <>
    <div className='container'>
        <h1 className='all-products-title'>
            ALL PRODUCTS
        </h1>
       
        <div className="cartsectwo">
       {
        data.map((product)=>
        <Herocart key={product.id} product={product}/>
        )
       }
       </div>
       </div>
</>
        
 
  )
}
