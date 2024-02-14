import styles from "./Register.module.css";
const Register = () => {
  console.log(styles);
  return (
    <div className={styles.formRegistration}>
      <h2>Start Your Fitness</h2>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter Name"
          required
        />
        <input
          type="Email"
          className={styles.input}
          placeholder="Enter Email"
          required
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Enter password"
          required
        />
        <input
          type="number"
          className={styles.input}
          placeholder="Enter age"
          required
        />
        <button className={styles.submitBtn}>Join</button>
      </form>
      <p className={styles.loginStatus}>Already Registered ? Login</p>
    </div>
  );
};

export default Register;
