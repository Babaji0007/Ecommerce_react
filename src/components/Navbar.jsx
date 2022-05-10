import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.css';




const Navbar = () => {
  return (
    <div className='navbar'>
    <div>
        <p>Home</p>
        <div className='navbar_search_icon_div' >
        <input className='navbar_search'  type="text" placeholder='search' /><SearchIcon/>
        </div>
        
        {/* <p>search</p> */}
    </div>
    <div>
        <p>LogIn</p>
        <p>SignUp</p>
        <div className='navbar_cart_icon_div' >
        <Badge badgeContent={5} color="primary">
      <ShoppingCartOutlinedIcon />
    </Badge>

    
        </div>
    </div>
       
        
    </div>
  )
}

export default Navbar