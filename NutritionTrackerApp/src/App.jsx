import styles from "./App.module.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Track from "./components/Track";
import { Routes, Route, useNavigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { useEffect, useState } from "react";
import { userContext } from "./contexts/UserContext";

function App() {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("nutrify-user") !== null) {
      setLoggedUser(JSON.parse(localStorage.getItem("nutrify-user")));
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <main className={styles.container}>
      <userContext.Provider value={{ loggedUser, setLoggedUser }}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/track" element={<Track />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </userContext.Provider>
    </main>
  );
}
export default App;
