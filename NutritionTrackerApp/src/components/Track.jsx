import { Link } from "react-router-dom";
import styles from "./Track.module.css";
import Header from "./Header";
const Track = () => {
  return (
    <div className={styles.trackcomp}>
      <Header />
      Welcome to dashboard <Link to="/demo">demo</Link>
      <div className={styles.search}>
       <input type="search" placeholder="Search food item"/>
      </div>
    </div>
  );
};

export default Track;
