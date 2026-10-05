import { useState } from "react";
import api from "../api/axios";

function Login() {
  const [formData, setaFormData] = useState({
    identifier:"",
    password: "",
  });

  const handleChange = (e) => {
    setaFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", formData);
      console.log(response.data);
      alert("Login successful!");
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
}

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>


          <input
            name="identifier"
            type="text"
            placeholder="Username or Email"
            value={formData.identifier}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  };

export default Login