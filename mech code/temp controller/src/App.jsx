import './App.css'
import Temprature from './Temprature';
import {useState} from "react";
function App() {
  const [temp, setTemp]=useState(12)
  
  return (
    <div className='main'>         
      <Temprature temp={{temp, setTemp}}/>      
    </div>
  )
}

export default App
