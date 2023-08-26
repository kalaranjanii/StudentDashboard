import React, { useState } from "react";
import "../Component/loginpage.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform authentication logic here
    if (username === "user" && password === "pw") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (<>
  <div className="App">
    <div className="container1">
      <h2>Login</h2>
      <form className="login-form">
        <label className="label" type="text">Username</label>
        <input className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="label" type="password">Password</label>

        <input className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button className="button"  onClick={handleLogin}>Login</button>
    </div>
    </div>
    </>);
};

export default LoginPage;
