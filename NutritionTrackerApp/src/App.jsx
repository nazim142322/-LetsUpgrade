import styles from "./App.module.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Track from "./components/Track";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { useEffect, useState } from "react";
import { userContext } from "./contexts/UserContext";
import Private from "./components/Private";
import Demo from "./components/Demo";
// import Logout from "./components/Logout";

function App() {
  // const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("nutrify-user"))
  );
  //   useEffect(() => {
  //   if (localStorage.getItem("nutrify-user") !== null) {
  //     setLoggedUser(JSON.parse(localStorage.getItem("nutrify-user")));
  //   }
  //   //else {
  //   //   navigate("/login");
  //   // }
  // }, []);
  console.log(loggedUser);
  return (
    <main className={styles.container}>
      <userContext.Provider value={{ loggedUser, setLoggedUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/track" element={<Private Component={Track} />} />
            <Route path="/demo" element={<Private Component={Demo} />} />
            <Route path="*" element={<PageNotFound />} />
            {/* <Route path="/logout" element={<Private Component={Logout} />} /> */}
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </main>
  );
}
export default App;
