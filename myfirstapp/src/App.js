import "./App.css";
import Product from './components/Product'
import {useEffect, useState} from 'react';
function App() {
  const[name, setName]=useState("nazim")
  const[age, setAge] = useState(35);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  },[age])

  return (
    <div className="App">
          
          <Product name = "samsung" price="20000"/>
          <h2>Welcome {name}</h2>         
           <h2>{age}</h2>
          <button onClick={()=>{setName("anil")}}> click me </button>
          <button onClick={()=>{setAge(36)}}> click me </button>
    
    </div>
  );
}
export default App;
