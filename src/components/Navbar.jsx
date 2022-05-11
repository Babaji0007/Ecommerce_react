import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.css';
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <div className='navbar'>
    <div>
       <Link to="/" >
       <p><span>Fshop</span> </p>
       </Link>
       <Link to="/" >
        <p>Home</p>
        </Link>
        
        {/* <div className='navbar_search_icon_div' >
        <input className='navbar_search'  type="text" placeholder='search' /><SearchIcon/>
        
        </div> */}
        <Link to="/ProductShow" ><p>Products</p></Link>
        
        {/* <p>search</p> */}
    </div>
    <div>
    <Link to="Login" ><p>LogIn</p></Link>
    <Link to="Signup" ><p>SignUp</p></Link>
       
       
        <Link to ="/Cart">
        
             <div className='navbar_cart_icon_div' >
        <Badge badgeContent={5} color="primary">
      <ShoppingCartOutlinedIcon />
    </Badge>
        </div>
        </Link>
        
   
    </div>
       
        
    </div>
  )
}

export default Navbar