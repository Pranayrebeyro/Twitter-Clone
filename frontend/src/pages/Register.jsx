import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    gender: "male",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await api.post("/register/", formData);

      alert("Registration Successful");
      navigate("/");
    } catch (err) {
  console.log(err);
  console.log(err.response);
  console.log(err.response?.data);
  alert(err.response?.data || "Registration Failed");
}
  };

  return (
    <div style={{ width: "350px", margin: "50px auto" }}>
      <h1>Create Account</h1>

      <form onSubmit={registerUser}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>

      <br />

      <button onClick={() => navigate("/")}>
        Back to Login
      </button>
    </div>
  );
}

export default Register;