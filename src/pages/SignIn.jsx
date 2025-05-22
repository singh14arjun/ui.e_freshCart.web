import React from "react";
import "../styles/signIn.css";

const SignIn = () => {
  return (
    <div className="signin-container mx-20 my-5">
      <div className="signin-image mx-10">
        <img
          src="https://freshcart-next-js.vercel.app/images/svg-graphics/signin-g.svg"
          alt="Sign In Illustration"
        />
      </div>

      <div className="signin-form">
        <h2>Sign in to FreshCart</h2>
        <p>Welcome back to FreshCart! Enter your email to get started.</p>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="signin-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="forgetPassword">
              Forgot password? <span>Reset It</span>
            </a>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
