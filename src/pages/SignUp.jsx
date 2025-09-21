import React, { useState } from "react";
import "../styles/signUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (name) => {
    navigate(`${name}`);
  };

  const addUser = async (e) => {
    e.preventDefault(); // Stop page refresh

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      setMessage(data.message || "User created successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong!");
    }
  };

  return (
    <>
      <h1>SignUp</h1>
      <div className="overlay">
        <div className="modales">
          <h2>Sign Up</h2>
          <form onSubmit={addUser}>
            <label htmlFor="name">
              Name
              <input
                type="text"
                placeholder="Enter Your Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="email">
              Email address
              <input
                type="email"
                placeholder="Enter Email address"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <p>
              By Sign Up, you agree to our
              <span className="text-green-500"> Terms Of Service</span> &
              <span className="text-green-500"> Privacy Policy</span>
            </p>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          {message && <p style={{ color: "green" }}>{message}</p>}

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
