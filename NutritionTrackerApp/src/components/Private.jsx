import { Navigate } from "react-router-dom";
import { userContext } from "../contexts/UserContext";
import { useContext } from "react";

const Private = (props) => {
  const loggedData = useContext(userContext);
  console.log(loggedData);

  return loggedData.loggedUser !== null ? (
    <props.Component />
  ) : (
    <Navigate to="/login" />
  );
};

export default Private;
