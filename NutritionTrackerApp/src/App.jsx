import styles from "./App.module.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Track from "./components/Track";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { userContext } from "./contexts/UserContext";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  return (
    <main className={styles.container}>
      <userContext.Provider value={{ loggedUser, setLoggedUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/track" element={<Track />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </main>
  );
}
export default App;
