import { Navigate } from "react-router-dom";
import { userContext } from "../contexts/UserContext";
import { useContext } from "react";

const Private = (props) => {
  const loggedData = useContext(userContext);
 
  return loggedData.loggedUser !== null ? (
    <>
      <h3>this is private page</h3>
      <br />
      <props.Component />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export default Private;
