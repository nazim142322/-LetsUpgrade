import Category from "./Category";
import { UserContext } from "../App";
import { useContext } from "react";

const Product = () => {
  const styles = {
    border: "3px solid red",
    padding: "20px",
    fontSize: "30px",
  };
  const u = useContext(UserContext);
  console.log(u);
  return (
    <>
      <div style={styles}>
        Product {u.name}
        <Category />
      </div>
    </>
  );
};

export default Product;
