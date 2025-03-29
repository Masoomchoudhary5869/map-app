import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registaration.css"; // Import the shared CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    gender: "",
    password: "",
  });
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setPhoto(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", formData.username);
    data.append("address", formData.address);
    data.append("gender", formData.gender);
    data.append("password", formData.password);
    if (photo) data.append("photo", photo);

    try {
      await API.post("/", data);
      toast.success("Registered Successfully!");
      navigate("/Login");
    } catch (error) {
      toast.error("Error registering user");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          onChange={handleChange}
        />
        <select name="gender" required onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
       
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
         <input
          type="file"
          accept="image/*"
          required
          onChange={handleFileChange}
        />
        <button type="submit">Register</button>
      </form>
      <p className="switch-auth">
        Already have an account? <Link to="/Login">Login</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Register;
