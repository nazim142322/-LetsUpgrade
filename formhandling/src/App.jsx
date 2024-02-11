import "./App.css";
import ComplexState from "./ComplexState";
import { FormHandling } from "./FormHandling";
import { useState } from "react";
function App() {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  function handleInput(event) {
    setDetails((preObj) => {
      return { ...preObj, [event.target.name]: event.target.value };
    });
  }
  function handleSubmit() {
    console.log(details);
  }

  return (
    <>
      <input
        type="text"
        name="name"
        onChange={handleInput}
        placeholder="enter name"
        value={details.name}
      />
      <input
        type="email"
        name="email"
        onChange={handleInput}
        placeholder="enter email"
        value={details.email}
      />
      <input
        type="phone"
        name="phone"
        onChange={handleInput}
        placeholder="enter phone"
        value={details.phone}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default App;
