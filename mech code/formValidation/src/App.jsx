import { useState } from "react";
import "./App.css";
function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPass: "",
  }); //for input values
  function handleInput(event) {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setUser((pre) => {
      return { ...pre, [event.target.name]: event.target.value };
    });
  } //for getting input values
  const [validation, setValidation] = useState({}); //for form validation
  const [flag, setFlag] = useState(true); //for form submission message
  function handleSubmit(event) {
    event.preventDefault();
    const newError = {};
    if (!user.username) {
      // setValidation({ username: "enter username" });
      newError.username = "enter username";
    } else if (user.username.length <= 2 || user.username.length >= 10) {
      newError.username = "invalid name";
    }
    if (!user.email) {
      // setValidation({ email: "enter username" });
      newError.email = "enter email";
    } else if (user.email.indexOf("@") <= 0) {
      newError.email = "Invalid Email Format";
    }
    if (!user.mobile) {
      // setValidation({ mobile: "enter mobile no" });
      newError.mobile = "enter mobile no";
    } else if (user.mobile.length != 10 || isNaN(user.mobile)) {
      newError.mobile = "invalid mobile number";
    }
    if (user.password == "") {
      // setValidation({ password: "enter password" });
      newError.password = "enter password";
    } else if (user.password.length <= 3 || user.password.length >= 8) {
      newError.password = "Password should be between 4 to 7 characters long.";
    }
    if (user.confirmPass == "") {
      // setValidation({ confirmPass: "re-enter password" });
      newError.confirmPass = "re-enter password";
    } else if (user.password !== user.confirmPass) {
      newError.confirmPass = "Password does not match";
    }
    setValidation(newError);
    if (Object.keys(newError).length === 0) {
      setUser({
        username: "",
        email: "",
        mobile: "",
        password: "",
        confirmPass: "",
      });
      setFlag(!flag);
      setTimeout(() => {
        setFlag(true);
      }, 4000);
    }
  }
  return (
    <div className="formContainer">
      <h2>Instagram</h2>
      <form className="regForm" onSubmit={handleSubmit} autoComplete="off">
        <div className="fromControl">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleInput}
            value={user.username}
          />
          <span>{validation.username}</span>
        </div>
        <div className="fromControl">
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleInput}
            value={user.email}
          />
          <span>{validation.email}</span>
        </div>
        <div className="fromControl">
          <input
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            onChange={handleInput}
            value={user.mobile}
          />
          <span>{validation.mobile}</span>
        </div>
        <div className="fromControl">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
            value={user.password}
          />
          <span>{validation.password}</span>
        </div>
        <div className="fromControl">
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPass"
            onChange={handleInput}
            value={user.confirmPass}
          />
          <span>{validation.confirmPass}</span>
        </div>
        <button>Sign up</button>
      </form>
      <h4 className={flag ? "flagMsg" : "success"}>
        Form submitted successfully
      </h4>
    </div>
  );
}

export default App;
