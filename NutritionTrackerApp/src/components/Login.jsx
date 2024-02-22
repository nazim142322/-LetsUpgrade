import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { userContext } from "../contexts/UserContext";
function Login() {
  const loggedInData = useContext(userContext); //for login reponse
  const navigate = useNavigate(); //to redirect
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  }); //for form data
  const [message, setMessage] = useState(""); //for login message

  function handleInput(event) {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setLoginDetails((preObj) => {
      return { ...preObj, [event.target.name]: event.target.value.trim() };
    });
  } // to get value form form
  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginDetails);
    setLoginDetails({
      email: "",
      password: "",
    }); //to empty form again
    setMessage("login Successfully");
    localStorage.setItem(
      "nutrify-user",
      JSON.stringify({
        message: "login success",
        name: "nazim",
        token: "hlkui9879hkh98789hkl98y9hklh877",
        userid: "9887n997no7m98",
      })
    ); //to store response into localStorage for relogin purpose
    loggedInData.setLoggedUser({
      name: "nazim",
      token: "hlkui9879hkh98789hkl98y9hklh877",
      userid: "9887n997no7m98",
    }); // updating state for global access or adding data to context
    navigate("/track"); //to redirect to a route
  }
  return (
    <>
      <div className={styles.formLogin}>
        <h2>Login to fitness</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            value={loginDetails.email}
            className={styles.input}
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleInput}
            value={loginDetails.password}
            className={styles.input}
            placeholder="Enter password"
            required
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
      <h3>{message}</h3>
    </>
  );
}
export default Login;
