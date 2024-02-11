import "./App.css";
import Refdemo from "./Refdemo";
import { useState, useEffect, useRef } from "react";
function App() {
  const [name, setName] = useState("Nazim");
  let nVar = 0;
  let rVar = useRef(10);
  useEffect(() => {
    console.log(name);
    console.log(nVar);
    console.log(rVar.current);
  });
  return (
    <>
      <h1>useRef React</h1>
      <Refdemo />
      <h1>my name {name}</h1>
      <h1>normal variable value {nVar}</h1>
      <h1>useRef variable value {rVar.current}</h1>
      <button
        onClick={() => {
          setName("khan");
          nVar = 1;
          rVar.current = 11;
        }}
      >
        click me
      </button>
    </>
  );
}
export default App;
