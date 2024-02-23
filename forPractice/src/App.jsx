import React from 'react';
import {useRef} from 'react';
const App = () => {
 
  let pTag=useRef();
  React.useEffect(()=>{
    console.log(pTag.current)
 
  })  
  return (
    <div>
     <p ref={pTag}>hello world</p>
     <button
        onClick={()=>pTag.current.style.color="red"}> click
     </button>
    </div>
  )
}
export default App