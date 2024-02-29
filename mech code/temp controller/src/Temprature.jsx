import React from 'react';
import {useState} from 'react';
const Temprature = (props) => { 
  const[color, setColor]=useState()
  let temp=props.temp.temp
  let setTemp= props.temp.setTemp;

   function handlePlus(){ 
   setTemp(temp==30?temp=30:temp+1);
    if(temp >=18){
      setColor("tempDis2")
    }    
  }
   function handleMinus(){    
   setTemp(temp==12?temp=12:temp-1);
   if(temp<=19){
    setColor("")
   }
   }
  return (
    <div className="temp">
      <img src="../src/assets/phone.webp" alt="" width="500"/>  
       <div className={`tempDis ${color}`}>
        <span>{`${props.temp.temp}°C`}</span>
       </div>
       <div className="tempBtn">
        <button onClick={handlePlus}>Plus</button>
        <button onClick={handleMinus}>Minus</button>
       </div>
    </div>
  )
}
export default Temprature