import React, { useEffect } from "react";
import "../styles/signUp.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const handleClick = (name) => {
    navigate(`${name}`);
  };
  return (
    <>
      <h1>SingUp</h1>
      <div className="overlay">
        <div className="modales">
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="name">
              Name
              <input
                type="text"
                placeholder="Enter Your Name"
                id="name"
                required
              />
            </label>
            <label htmlFor="email">
              Email address
              <input
                type="email"
                placeholder="Enter Email address"
                id="email"
                required
              />
            </label>
            <label>
              Password
              <input type="password" placeholder="Enter Password" required />
            </label>
            <p>
              By Singup, you agree to our
              <span className="text-green-500">Terms Of Service</span> &
              <span className="text-green-500"> Privacy Policy</span>
            </p>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
          <p className="signin-link">
            Already have an account? <a href="/signin">Sign in</a>
          </p>
          <button
            className="absolute top-[15px] right-5 text-[1.5rem] font-bold bg-transparent rounded px-2 py-1 cursor-pointer"
            onClick={() => handleClick("/")}
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
