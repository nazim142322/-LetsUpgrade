import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  const [userDetails, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  //for message
  const [message, SetMessage] = useState({
    type: "",
    text: "",
  });
  function handleInput(event) {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setDetails((prev) => {
      return { ...prev, [event.target.name]: event.target.value.trim() };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(userDetails);

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      body: JSON.stringify(userDetails),
      header: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage({ type: "success", text: data.message });
        setDetails({
          name: "",
          email: "",
          password: "",
          age: "",
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.formRegistration}>
      <h2>Start Your Fitness</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          className={styles.input}
          placeholder="Enter Name"
          value={userDetails.name} //two way binding
          required
        />
        <input
          type="Email"
          name="email"
          onChange={handleInput}
          className={styles.input}
          placeholder="Enter Email"
          value={userDetails.email}
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleInput}
          className={styles.input}
          placeholder="Enter password"
          required
          value={userDetails.password}
        />
        <input
          type="number"
          age="age"
          name="age"
          onChange={handleInput}
          className={styles.input}
          placeholder="Enter age"
          value={userDetails.age}
          required
        />
        <button className={styles.submitBtn}>Join</button>
      </form>
      <p className={styles.loginStatus}>
        Already Registered ?{" "}
        <Link className={styles.login} to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};
export default Register;
