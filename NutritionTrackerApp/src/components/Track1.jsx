import { useContext, useEffect } from "react";
import { userContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Track1 = () => {
  const navigate = useNavigate();
  const userDetails = useContext(userContext);
  console.log(userDetails);

  useEffect(() => {
    if (userDetails.loggedUser == null) {
      navigate("/login");
    }
  }, []);

  return <div>Welcome to dashboard</div>;
};

export default Track1;
