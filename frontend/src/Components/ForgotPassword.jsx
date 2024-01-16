import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div className="container w-full h-[600px] flex justify-center">
        <div className="w-[600px] h-[300px] border border-black rounded-lg p-8 my-auto text-center">
          <h1 className="font-bold text-[#662671]">
            Did you forget your password?
          </h1>
          <span>
            Enter your email address and we'll send you a link to restore
            password
          </span>
          <div className="email-input">
            <input
              className="border border-black p-2 rounded-lg w-96 mt-10"
              type="text"
              name="email"
              id="login"
              placeholder="Enter Email-Id"
            />
          </div>
          <div className="reset-btn">
            <button className="bg-[#5C218B] p-2 rounded-lg text-white w-96 mt-6 mb-4">
              Request Reset Link
            </button>
          </div>
            <Link
              to={`/`}
              className="font-bold text-[#A08CB1] "
            >
              Back To Login
            </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
