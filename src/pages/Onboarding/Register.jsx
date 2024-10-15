import React from "react";
import { Stepper } from "@mantine/core";
import { Steppercomp } from "../../pages/Onboarding/Steppercomp";

export const Register = () => {
  return (
    <div className="main-div flex p-2">
      {/* Left Half */}
      <div className="left-half w-1/2 rounded-lg relative">
        <img
          src="Image1.jpeg"
          alt=""
          className="object-cover h-screen rounded-3xl"
        />
        {/* Overlay Text Box */}
        <div className="absolute bottom-0 left-0 w-full h-1/6 bg-black bg-opacity-50 rounded-b-3xl flex justify-center">
          <p className="py-5 px-2 w-4/5   text-white text-center">
            “Your mental health is a priority. Your happiness is an essential.
            Your self-care is a necessity.” <br /> -Serene Minds
          </p>
        </div>
      </div>
      {/* Right-Half */}
      <div className="right-half w-1/2 flex flex-col ">
        {/* <div className="upper-row flex justify-between px-10 py-2">
          <p className="signup-text text-4xl">Sign In</p>
          <img
            src="logo-black.png"
            alt="logo-black"
            className="w-[100px] h-[48px]"
          />
        </div> */}
        <div className="stepper px-5 py-4 mt-4">
          <Steppercomp />
          </div>
          
        </div>
      
    </div>
  );
};
