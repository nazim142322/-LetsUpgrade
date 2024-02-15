import styles from "./App.module.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <main className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />          
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
