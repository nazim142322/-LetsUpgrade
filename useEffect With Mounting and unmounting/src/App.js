import "./App.css";
import Product from "./components/Product.js";
import { useEffect, useState } from "react";
function App() {
  const [productVisible, setProductVisible] = useState(false);

  return (
    <div className="App">
      {<h2>Welcome</h2>}

      {productVisible == true ? <Product name="samsung" price="20000" /> : null}
      <button onClick={() => setProductVisible(true)}>Show product</button>
      <button onClick={() => setProductVisible(false)}>Hide product</button>
    </div>
  );
}
export default App;
