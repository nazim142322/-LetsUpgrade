import styles from "./App.module.css";
import About from "./components/About";
import Product from "./components/Product";
import Service from "./components/Service";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
function App() {
  return (
    <>
      {/* read browser path */}
      <BrowserRouter>
        <nav>
          <ul className={styles.navigation}>
            <li>
              <NavLink className={styles.link} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/product">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/service">
                Service
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
