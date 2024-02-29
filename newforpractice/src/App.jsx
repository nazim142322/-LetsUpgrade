import { useState } from 'react';
import './App.css'

export default function App() {
  const [addClass, setaddClass] = useState(true);
  function handleClick(){
    setaddClass(!addClass)
  }
    return (
    <>   
      <p className={`read-the-docs ${addClass?'disNone':'disBlock'}`}>
        Click on the Vite and React logos to learn more
      </p>
      <button className={`btn`} onClick={handleClick}>click</button>
    </>
  )
}
