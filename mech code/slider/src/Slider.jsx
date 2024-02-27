import React from 'react';
import './Slider.css';
import img1 from '../src/assets/img1.jpg';
import img2 from '../src/assets/img2.jpg';
import img3 from '../src/assets/img3.jpg';



const Slider = () => {
    const data=[img1,img2,img3];
  return (
    <div className='slider'>
        <div className='slider-img'>           
          <img src={data[0]} alt="" />          
          <button className="nextBtn">Next</button>
          <button className="preBtn">Previous</button>        
        </div>
        
    </div>
  )
}

export default Slider