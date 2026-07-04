import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login/", {
        username,
        password,
      });

      localStorage.setItem("jwtToken", response.data.jwtToken);
      navigate("/home");
    } catch (err) {
      alert(err.response?.data || "Login Failed");
    }
  };

  return (
    <div style={{ width: "350px", margin: "80px auto" }}>
      <h1>Twitter Clone</h1>

      <form onSubmit={loginUser}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>
      </form>

      <br />

      <button onClick={() => navigate("/register")}>
        Register
      </button>
    </div>
  );
}

export default Login;