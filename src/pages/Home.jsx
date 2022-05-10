import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HomepageimageSlide from "../components/HomepageimageSlider"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomepageimageSlide/>
        <Footer/>
    </div>
  )
}

export default Home