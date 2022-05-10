import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
const HomepageimageSlider = () => {
  return (
    <div className="image">
    <AliceCarousel autoPlay autoPlayInterval="3000">
    <img src="https://d39vol41m7feya.cloudfront.net/1600098975-pngtree-simple-red-shading-background-illustration-design-backgroundscience-and-technologyred-image_70514.jpg" alt="" className="sliderimg"/>
    <img src="https://images.freekaamaal.com/featured_images/86240_1.jpg" alt=""  className="sliderimg"/>
    <img src="https://i.pinimg.com/564x/2e/d2/bd/2ed2bdc0354043b8badf0e9d17b0170a.jpg" alt="" className="sliderimg"/>
 <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="sliderimg"/>
 <img src="https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""  className="sliderimg"/>
 
 <img src="https://d39vol41m7feya.cloudfront.net/1600421326-pngtree-simple-red-shading-background-illustration-design-backgroundscience-and-technologyred-image_70514_(1)_-_Copy_-_Copy.jpg" alt="" className="sliderimg" />
 
   
</AliceCarousel>


    </div>
  )
}

export default HomepageimageSlider