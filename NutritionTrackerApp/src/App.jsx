import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
function App() {
  return (
    <main className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register></Register>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
