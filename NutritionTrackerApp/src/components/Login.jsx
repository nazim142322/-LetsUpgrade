import styles from "./Login.module.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className={styles.formLogin}>
      <h2>Login to fitness</h2>
      <form>
        <input
          type="email"
          name="name"
          className={styles.input}
          placeholder="Enter email"
        />
        <input
          type="password"
          name="pass"
          className={styles.input}
          placeholder="Enter password"
        />
        <button className={styles.submitBtn}>Login</button>
      </form>
      <p className={styles.loginStatus}>
        Dont have an account ?{" "}
        <Link className={styles.register} to="/">
          Register Now
        </Link>
      </p>
    </div>
  );
}
export default Login;
