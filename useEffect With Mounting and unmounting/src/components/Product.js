import "./Product.css";
import { useEffect } from "react";
function Product(props) {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    
      return function () {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json));
    };
  });
  return (
    <div className="product">
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </div>
  );
}
export default Product;
