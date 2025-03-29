import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registaration.css"; // Import the shared CSS file

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/Login", formData);
      localStorage.setItem("token", res.data.token);
      toast.success("Login Successful!");
      navigate("/");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <p className="switch-auth">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;
