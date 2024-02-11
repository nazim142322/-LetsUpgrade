import { useState, createContext } from "react";
import Product from "./components/Product";
import "./App.css";
import Demo from "./components/Demo";

export const UserContext = createContext(); // create a context
function App() {
  const [username, setUsername] = useState("nazim");
  const person = { name: "nazim", age: 35, city: "dehradun" };
  return (
    <>
      {/* // wrap everything in context and give value */}
      <UserContext.Provider value={person}>
        <Product />
        <Demo />
      </UserContext.Provider>
    </>
  );
}
export default App;
