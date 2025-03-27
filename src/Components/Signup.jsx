import React from "react";
import "./../styles/Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign up</h2>
      <form className="signup-form">
        <select className="signup-input">
          <option>PREMIUM</option>
          <option>BASIC</option>
          <option>ENTERPRISE</option>
        </select>

        <div className="signup-row">
          <input type="text" placeholder="Full Name" className="signup-input" />
          <input
            type="text"
            placeholder="Company Name"
            className="signup-input"
          />
        </div>

        <div className="signup-row">
          <input
            type="text"
            placeholder="IN India (+91)"
            className="signup-input"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="signup-input"
          />
        </div>

        <div className="signup-row">
          <input type="email" placeholder="Email" className="signup-input" />
          <input type="password" placeholder="Password" className="signup-input" />
        </div>

        <div className="signup-row">
          <select className="signup-input">
            <option>Category</option>
            <option>Business</option>
            <option>Individual</option>
            <option>Other</option>
          </select>
          <input
            type="text"
            placeholder="How did you hear about us?"
            className="signup-input"
          />
        </div>

        <div className="signup-checkbox">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By creating an account you agree to our <span>Terms</span>
          </label>
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
