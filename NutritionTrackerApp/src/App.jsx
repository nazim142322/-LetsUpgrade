import styles from "./App.module.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <main className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
