import "./App.css";
import {useState} from 'react';

function App() {
  let [name, setName] = useState('')

  return (
  < div className="App">
      <h4>Enter your name</h4>
     {/* <input type='text' onInput={(event)=>{ console.log(event.target.value) }}/>   */}
     <input type='text' onInput={(event)=>{ setName(event.target.value) }} value={name}/>   
     
  </div>)
}

export default App;
