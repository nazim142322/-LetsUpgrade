import {useEffect, useState} from 'react';
import './App.css'
function App() {
  const[min, setMin]=useState(0);
  const [sec, setSec]=useState(0);
  const [hour, setHour]=useState(0);
  const [running, setRunning]=useState(false);
  useEffect(()=>{
    let id=null
    if(running){
     id = setInterval(()=>{
        setSec(preSec=>{
        if(preSec==15){
          setMin(preMin=>{
            if(preMin==14){
              setHour(preHour=>preHour+1);
              return 0;
            }
            else{
              return preMin+1
            }          
          }   
          )
          return preSec=0;
        }
        else{
          return preSec+1;
        } 
      })
      },1000)   
    }
    return()=>{
      clearInterval(id)
    }
  },[running])
 
 return (
      <div>
        <p>{hour<10?"0"+hour:hour}:{min<10?"0"+min:sec}:{sec<10?"0"+sec:sec}</p>
        <button onClick={()=>{setRunning(true)}} >Start</button>
        <button onClick={()=>{setRunning(false)}}>Stop</button>
        <button onClick={()=>{setSec(0); setMin(0); setHour(0); setRunning(false)}}>Restart</button>
      </div>   
  )
}

export default App
