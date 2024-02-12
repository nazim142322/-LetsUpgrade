import "./App.css";
import { useRef } from "react";

function App() {
  let pTag = useRef();
  console.log(pTag.current);
  return (
    <>
      <p ref={pTag}>Hello world</p>
      <button
        onClick={() => {
          pTag.current.style.color = "red";
        }}
      >
        click me
      </button>
    </>
  );
}
export default App;
