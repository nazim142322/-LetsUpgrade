import { Navigate } from "react-router-dom";
import { userContext } from "../contexts/UserContext";
import { useContext } from "react";

const Private = (props) => {
  const loggedData = useContext(userContext);

  return loggedData.loggedUser !== null ? (
    <div>
      <h3>this is private page</h3>

      <props.Component />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
export default Private;
