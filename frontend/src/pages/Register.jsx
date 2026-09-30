import { useState } from "react";
import api from "../api/axios";

function Register() {
  const [formData, setaFormData] = useState({
    username: "",
    email: "",
    name: "",
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
      const response = await api.post("/auth/register", formData);
      console.log(response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error(error);
      alert("Registration failed!");
    }
}

    return (
      <div>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  };

export default Register