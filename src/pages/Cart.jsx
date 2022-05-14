import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate()
  const [data,setData]=useState([])

  useEffect(()=>{
    getData()
  },[])
  
  const getData=()=>{
    axios.get(`http://localhost:2100/cart`).then((res)=>{
      setData(res.data)
      
    })
  }
  
  const deleteData=(id)=>{
    axios.delete(`http://localhost:2100/cart/${id}`).then(()=>{
      getData()
    })
  }
  console.log(`Data- ${data.length}`)

  return (
    <div>
      <Navbar/>
       
      {data.map((e)=>{
   return <div className="cartpagemaindiv">
     <img src={e.image} alt="" />





     <button onClick={()=>{
      deleteData(e.id)
     }}>Delete</button>

     <button onClick={()=>{
     navigate('/Checkout')
     }}>checkout</button>
   </div>

 })}









      
      <br />
      <br /><br /><br />                                                         
      <Footer   />
      </div>
  )
}

export default Cart