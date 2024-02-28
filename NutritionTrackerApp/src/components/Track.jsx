import { Link } from "react-router-dom";
import styles from "./Track.module.css";
import Header from "./Header";
import { useContext } from "react";
import { userContext } from "../contexts/UserContext";
const Track = () => {
  const loggedData = useContext(userContext);
  const token = loggedData.loggedUser.token;
  function searchFood(event) {
    let query = event.target.value;
    fetch(`http://localhost:8000/foods/${query}`, {
      method: "GET",
      header: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.trackcomp}>
      <Header />
      Welcome to dashboard <Link to="/demo">demo</Link>
      <div className={styles.search}>
        <input
          type="search"
          onChange={searchFood}
          name="search"
          placeholder="Search food item"
        />
      </div>
    </div>
  );
};

export default Track;
