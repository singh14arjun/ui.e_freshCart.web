import React from "react";
import "../styles/forgetPassword.css";

const ForgetPassword = () => {
  return (
    <div>
      <div className="forget-password ">
        <div className="forget-password-form  px-20 py-1 m-auto ">
          <p className="font-bold text-3xl">Forget Your Password</p>
          <p className="font-semibold text-gray-700">
            Please enter the email address associated with your account and We
            will email you a link to reset your password.
          </p>
          <form action="">
            <input
              type="email"
              placeholder="Email"
              className="border-2 p-1 rounded-xl"
            />
            <button className="w-full text-center bg-green-500 font-semibold text-xl p-2 cursor-pointer">
              Reset Password
            </button>

            <a href="/signin">Back</a>
          </form>
        </div>
        <div className="forget-password-image  flex justify-center">
          <img
            src="https://freshcart-next-js.vercel.app/images/svg-graphics/fp-g.svg"
            alt="loading"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
