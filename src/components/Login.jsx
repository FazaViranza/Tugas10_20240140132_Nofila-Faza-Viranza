import { useState } from "react";

function Login({ setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      setIsLogin(true);
    } else {
      alert("Login gagal!");
    }
  };

  return (
    <div className="login-page">
      <div className="overlay"></div>

      <div className="login-container">
        <h1>Ferrari</h1>

        <p>Luxury Sports Car Experience</p>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default Login;