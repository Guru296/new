import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/Login.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    setEmailError(!e.target.email.value);
    setPasswordError(!e.target.password.value);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}
        <h1 className="logo">Viz<span>itor</span></h1>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className={`input-group ${emailError ? "error" : ""}`}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
          </div>

          {/* Password Input */}
          <div className={`input-group password-group ${passwordError ? "error" : ""}`}>
            <label>Password</label>
            <div className="password-field">
              <input type={passwordVisible ? "text" : "password"} name="password" placeholder="Enter your password" />
              <span onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn">Login</button>

          {/* Forgot Password */}
          <a href="#" className="forgot-password">Forgot password?</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
