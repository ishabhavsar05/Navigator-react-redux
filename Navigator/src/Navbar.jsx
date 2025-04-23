import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"#e9e9f2",padding:"5px",height:"30px"}}>
        <div >
            <Link to={"/"} style={{color:"black",textDecoration:"none",marginTop:"0px"}}>Home</Link>
        </div>
        <div>
            <Link to={"/about"} style={{color:"black",textDecoration:"none",marginTop:"10px"}}>About</Link>
        </div>
        <div>
            <Link to={"/product"} style={{color:"black",textDecoration:"none",marginTop:"10px"}}>Product</Link>
        </div>
        <div>
            <Link to={"/productdetail"} style={{color:"black",textDecoration:"none",marginTop:"10px"}}>ProductDetail</Link>
        </div>
        <div>
            <Link to={"/login"} style={{color:"black",textDecoration:"none",marginTop:"10px"}}> <button>Login</button> </Link>
        </div>
        
    </div>
  )
}

 