import { Link } from "react-router-dom";
import Header from "./Header";
const Track = () => {
  return (
    <div>
      Welcome to dashboard <Link to="/demo">demo</Link>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Track;
