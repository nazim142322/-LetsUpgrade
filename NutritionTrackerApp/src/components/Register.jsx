import styles from "./Register.module.css";
import {useState} from 'react';
const Register = () => { 
  const[details, setDetails] = useState({
    name:"",
    email:"",
    pass:"",
    age:""
  });
  function handleForm(event){
    event.preventDefault();
    setDetails((preObj)=>{
      return {...preObj, [event.target.name]:event.target.value}
    })
  }
  console.log(details)
  return (
    <div className={styles.formRegistration}>
      <h2>Start Your Fitness</h2>
      <form className={styles.form} onSubmit={handleForm}>
        <input
          type="text" name="name"
          className={styles.input}
          placeholder="Enter Name"          
        />
        <input
          type="Email" email="email"
          className={styles.input}
          placeholder="Enter Email"         
        />
        <input
          type="password" pass="password"
          className={styles.input}
          placeholder="Enter password"
        />
        <input
          type="number" age="age"
          className={styles.input}
          placeholder="Enter age"
        />
        <button className={styles.submitBtn}>Join</button>
      </form>
      <p className={styles.loginStatus}>Already Registered ? Login</p>
    </div>
  );
};
export default Register;
