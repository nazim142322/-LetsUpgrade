import './Slider.css';
import img1 from '../src/assets/img1.jpg';
import img2 from '../src/assets/img2.jpg';
import img3 from '../src/assets/img3.jpg';
import img4 from '../src/assets/img4.jpg';
import {useState,useEffect} from 'react';
const Slider = () => {
  const [slide, setSlide]=useState(0)
    const data=[img1,img2,img3,img4];
    function handleNext(){
      setSlide(slide==data.length-1?0:slide+1)
      // setSlide(slide=>{
      //   if(slide==data.length-1){
      //   return slide=0;
      //   }
      //   else{
      //     return slide+1;
      //   }
      // })
    }
    function handlePre(){
      setSlide(slide=>{
        if(slide==0){
         return slide=data.length-1;
        }
        else{
          return slide-1
        }
      }   
     )}
     useEffect(()=>{
      const id=setInterval(()=>{handleNext()},2000);
      return ()=>{
        clearInterval(id);
      }
    },[slide])
  return (
    <div className='slider'>
        <div className='slider-img'>           
          <img src={data[slide]} alt="" />          
          <button className="nextBtn"onClick={handleNext}>Next</button>
          <button className="preBtn" onClick={handlePre}>Previous</button>        
        </div>
        
    </div>
  )
}
export default Slider