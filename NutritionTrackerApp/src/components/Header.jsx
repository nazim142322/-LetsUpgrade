import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../contexts/UserContext";
const Header = () => {
  const Navigate = useNavigate();
  const loggedData = useContext(userContext);
  console.log(loggedData);
  function logout() {
    localStorage.removeItem("nutrify-user");
    loggedData.setLoggedUser(null);
    Navigate("/login");
  }
  return (
    <div>
      <ul>
        <li>home</li>
        <li onClick={logout}>logout</li>
      </ul>
    </div>
  );
};

export default Header;
