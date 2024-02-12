import {useEffect} from 'react'
const Product = () => {
    useEffect(()=>{
        console.log("product page")
        return function(){
            console.log("product unmount")
        }
    })
    
  return (
    <div className="product">
      <h2>Sumsung</h2>
      <p>Price Rs 2000</p>    
    </div>
  )
}

export default Product