import React, { useState, useEffect } from "react";
import styles from "./PreprodLogin.module.css";

function PreprodLogin() {
  const isPreprod = window.location.href.includes('preprod.workmob.com');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(checkUserLogin, []);
  function checkUserLogin() {
    const user = localStorage.getItem('loggedInUser');
    if (user === 'harish') {
      setIsLoggedIn(true);
    }
  }
  function loginUser() {
    if (username === 'harish' && password === 'Arcgate1!') {
      localStorage.setItem('loggedInUser', 'harish');
      setIsLoggedIn(true);
    }
  }

  return isPreprod && !isLoggedIn ? (
    <div className={styles.login}>
      <form
        className={styles.loginForm}
        onSubmit={(event) => event.preventDefault()}
      >
        <label className={styles.inputLabel}>
          Username
          <input
            className={styles.formInput}
            placeholder="Enter Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label className={styles.inputLabel}>
          Password
          <input
            className={styles.formInput}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button className={styles.submitButton} onClick={loginUser}>Submit</button>
      </form>
    </div>
  ) : null;
}

export default PreprodLogin;
