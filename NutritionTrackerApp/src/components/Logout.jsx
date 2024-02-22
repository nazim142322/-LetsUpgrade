import { userContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const loggedData = useContext(userContext);
  const navigate = useNavigate();
  console.log(loggedData);
  function handleLogout() {
    localStorage.removeItem("nutrify-user");
    loggedData.setLoggedUser(null);
    navigate("/login");
  }
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
