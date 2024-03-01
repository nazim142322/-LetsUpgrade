import React, { useEffect, useState } from "react";

const Products = () => {
  const [appData, setAppData] = useState();
  const [productArray, setProductArray] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/carts`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
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
    <div>
      <h3>poduct</h3>
      {appData !== undefined ? (
        appData.carts.map((element, index) => {
          return (
            <div key={index}>
              {/* <p>{JSON.stringify(element.products)}</p> */}
              <p>{`product_id-${element.id}, total-Rs.${element.total}, user id-${element.userId}`}</p>
            </div>
          );
        })
      ) : (
        <h2>fetching data</h2>
      )}
    </div>
  );
};
export default Products;
