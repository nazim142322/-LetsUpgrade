import "./Product.css";
import { useState } from "react";
function Product(props) {
  const [isavailabe, setisavailabe] = useState("yes");
  function myfun() {
    setisavailabe("no");
  }
  return (
    <div className="product">
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p>{isavailabe}</p>
      <span>Is availabe</span>
      <button onClick={myfun}>click</button>
    </div>
  );
}
export default Product;
