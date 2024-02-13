import "./App.css";
import Product from "./Product";
import{useState, useEffect, createContext} from 'react';
export const productContext = createContext();
function App() {
  let name = "Samsung";
  let modelNo ="M30s";
  const person ={name, modelNo};
   const[price, setPrice] = useState("20000")
  return (
    <>
      <productContext.Provider value={{person, price, setPrice}}>
         <h3>useContext and Context API in React</h3>
         <Product/>
      </productContext.Provider>  
    </>
  );
}
export default App;
