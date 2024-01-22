import "./App.css";
<<<<<<< HEAD
function App() {
  let login = 0;

  return (
    <div className="App">
      {(() => {
        if (login) {
          return (
            <div>
              <h1>true</h1>
            </div>
          );
        } else {
          return (
            <div>
              <h1>False</h1>
            </div>
          );
        }
      })()}
    </div>
  );
=======
import {useState} from 'react';

function App() {
  let [name, setName] = useState('')

  return (
  < div className="App">
      <h4>Enter your name</h4>
     {/* <input type='text' onInput={(event)=>{ console.log(event.target.value) }}/>   */}
     <input type='text' onInput={(event)=>{ setName(event.target.value) }} value={name}/>   
     
  </div>)
>>>>>>> a7b642bf2baf451a0382d52fe9cd8401db30dc2c
}

export default App;
