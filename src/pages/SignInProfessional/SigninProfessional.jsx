import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const SigninProfessional = () => {
  return (
    <div className="main-div flex">
      {/* Left Half */}
      <div className="left-half w-1/2 rounded-lg relative">
        <img src="image2.png" alt="" className="object-cover h-screen" />
        {/* Overlay Text Box */}
        <div className="absolute bottom-0 left-0 w-full h-1/6 bg-black bg-opacity-50 flex justify-center">
          <p className="py-5 px-2 w-4/5   text-white text-center">
            “Your mental health is a priority. Your happiness is an essential.
            Your self-care is a necessity.” <br /> -Serene Minds
          </p>
        </div>
      </div>
      {/* Right-Half */}
      <div className="right-half w-1/2 flex flex-col ">
        <div className="upper-row flex justify-between items-center px-10 py-2">
          <p className="signup-text text-4xl">Sign in</p>
          <img
            src="logo-black.png"
            alt="logo-black"
            className="w-[130px] h-[68px]"
          />
        </div>

        <div className="signup-btn flex justify-center items-center mt-48">
          <button className="border border-black px-44 py-2 rounded-full flex justify-center items-center">
            <FcGoogle size={24} className="mr-2" />
            Continue With Google
          </button>
        </div>

        <div className="mt-6 w-full flex justify-center items-center">
          <hr className="border-t border-gray-300 w-1/4" />
          <span className="mx-3">or</span>
          <hr className="border-t border-gray-300 w-1/4" />
        </div>

        <p className="mt-4 text-sm flex justify-center items-center">
          Don&apos;t have an account?&nbsp;{" "}
          <Link className="text-blue-500" to="/register">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
