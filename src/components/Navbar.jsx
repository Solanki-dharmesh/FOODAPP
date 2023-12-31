import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import Badge from 'react-bootstrap/Badge'
import { useState } from 'react'
import Modal from '../Modal'
import Cart from '../screens/Cart'
import { useCart } from './ContextReducer'

const Navbar = () => {
  const [cartView, setCartView] = useState(false)
let data=useCart()
const nevigate=useNavigate()
 const handleLogout=()=>{
    localStorage.removeItem("authToken")
    nevigate("/login")
  }
 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">Foodie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbarNav" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
      <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        
        {/* {
          (localStorage.getItem("authToken"))?<li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
        </li> :""
        } 
        */}
      </ul>
      {(!localStorage.getItem("authToken"))?
   
        <div className='d-flex'> 
         <Link className="btn bg-white text-warning mx-1" to="/login">Login</Link>      
    
       <Link className="btn bg-white text-warning mx-1" to="/createuser">SignUp</Link>
       </div>:
      <div>
         <div className="btn bg-white text-warning mx-1" onClick={()=>setCartView(true)}>
          
        My Cart {" "}
        <Badge className='bg-danger'>{data.length}</Badge>
       </div>
       { cartView?<Modal  onClose={()=>setCartView(false)}> <Cart/></Modal>:null}
       <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>
        Logout
       </div>
      </div>
}
    </div>
  </div>
</nav>
  )
}

export default Navbar
