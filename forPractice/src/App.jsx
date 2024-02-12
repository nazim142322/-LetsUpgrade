import './App.css'
import Product from './Product'
import {useState} from 'react';
function App() {
const [showProduct, setProduct]=useState(false)
  return (
    <>     
      {
        showProduct?<Product/>:null
      }
      <button onClick ={()=>{setProduct(true)}}>Show Product</button> 
      <button onClick ={()=>{setProduct(false)}}>Hide Product</button>        
    </>
  )
}
export default App
