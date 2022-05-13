import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Login  from '../pages/Login'
import Signup from '../pages/Signup'
// import ProductShow from '../pages/ProductShow'
import Cart from '../pages/Cart'
import Todos from '../pages/ProductShow'
import { ProductDetail } from '../pages/ProductDetail'

const Router = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="product/:id" element={<ProductDetail/>}></Route>
    <Route path='/Login' element={<Login/>} />
    <Route path='/Signup' element={<Signup/>} />
    <Route path='/ProductShow' element={<Todos/>} />
    <Route path='/Cart' element={<Cart/>} />



    </Routes>


    </div>
  )
}

export default Router