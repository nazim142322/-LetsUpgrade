import { UserContext } from "../App"; //import context
import { useContext } from "react"; //useContect to get data from context
const Category = () => {
  let u = useContext(UserContext); //get the value from context created
  console.log(u);
  const styles = {
    border: "2px solid green",
  };
  return <div style={styles}>Category {u.age}</div>;
};

export default Category;
