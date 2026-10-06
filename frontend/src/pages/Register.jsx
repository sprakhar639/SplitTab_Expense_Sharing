import { useState } from "react";
import api from "../api/axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
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
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md bg-[#1b1d23] p-8 rounded-xl">
        <div>
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Register
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="w-full p-3 rounded-lg bg-[#25272e] text-white border border-gray-600"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              className="w-full p-3 rounded-lg bg-[#25272e] text-white border border-gray-600"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />

            <input
              className="w-full p-3 rounded-lg bg-[#25272e] text-white border border-gray-600"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className="w-full p-3 rounded-lg bg-[#25272e] text-white border border-gray-600"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              className="w-full p-3 rounded-lg bg-blue-600 text-white font-semibold"
              type="submit"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
  Already have an account?{" "}
  <a
    href="/login"
    className="text-blue-500 hover:text-blue-400"
  >
    Login
  </a>
</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
