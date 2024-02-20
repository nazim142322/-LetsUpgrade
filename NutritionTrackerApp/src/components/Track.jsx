import { useContext } from "react";
import { userContext } from "../contexts/UserContext";
const Track = () => {
  const userDetails = useContext(userContext);
  // console.log(userDetails.loggedUser.token);
  return <div>Welcome to dashboard</div>;
};

export default Track;
