import React, { useEffect, useState } from "react";
const Products = () => {
  const [appData, setAppData] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/carts`)
      .then((res) => {
        if (!res.ok) {
          throw Error("error while loading");
        }
        return res.json();
      })
      .then((data) => {
        setAppData(data);
      })
      .catch((error) => alert(error));
  }, []);
  appData !== undefined ? console.log(appData.carts) : null;
  return (
    <div className="products">      
      {appData !== undefined ? (
        appData.carts.map((element) => {
          return (
            <>           
             {element.products.map((proArray,key)=>{
              return( 
                  <div id ={key} className="card" >
                      <div className="cardImg">
                        <img src={proArray.thumbnail} alt={proArray.title} />
                      </div>                    
                      <p>{proArray.title}</p>
                      <p>{`Rs.${proArray.price}`}</p>
                      <button>Add to Cart</button>                    
                  </div>     
                    )
            })}</>
            
          );
        })
      ) : (
        <h2 style={{color:"green"}}>fetching data</h2>
      )}
    </div>
  );
};
export default Products;
