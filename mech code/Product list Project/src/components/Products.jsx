import React,{useEffect, useState} from 'react'

const Products = () => {
  const [appData, setAppData]=useState()
  useEffect(()=>{
    fetch(`https://dummyjson.com/carts`)
    .then(res=>{if(!res.ok){
              throw Error(res.statusText);
               };
               return res.json()})  
    .then(data=>{setAppData(data)})
    .catch(error=>alert(error))
  },[]);
  let product=appData?.carts[].products;
  console.log(product)
  return (
    <div>
      <h3>poduct</h3> 
      {/* {
        product!==undefined?product.map((items, index)=>{
          return(
            <div key={index}>
              <h5>{items.title}</h5>
            </div>
            
          )
        }):<h4>fetching data</h4>
      }  */}
      
    </div>
  )
}
export default Products