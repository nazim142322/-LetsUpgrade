import "./Product.css";
function Product({ name, price }) {
  // console.log(props);
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Rs {price}</p>
      {/* <pre>{JSON.stringify(props)}</pre> */}
    </div>
  );
}
export default Product;
