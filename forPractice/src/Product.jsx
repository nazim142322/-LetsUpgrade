import { productContext } from "./App"
import{useContext} from "react";
const Product = () => {   
  const productData = useContext(productContext);
  console.log(productData);
    
  return (
    <div className="product">
      <h3>Product - {productData.person.name}</h3>
      <h4>Model no - {productData.person.modelNo}</h4>
      <p>Price Rs - {productData.price}</p> 
      <button onClick={()=>productData.setPrice(prevPrice => prevPrice*2)}>Click</button>

    </div>
  )
}

export default Product