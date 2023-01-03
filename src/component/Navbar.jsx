import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
function Navbar() {
 const item = useSelector (state => state.cart)
  return (
    <div className='Navbar'>
       <ul>
       <Link to={"./"}>
       <li>
        <b>HOME</b>  
        </li>
       </Link>

        <li>
          <b>CONTECT US</b>
        </li>
      </ul>

     <Link to={"/Cart"}> <button className='btn'>CART ({item.length})  </button> </Link>
    </div>
  )
}

export default Navbar