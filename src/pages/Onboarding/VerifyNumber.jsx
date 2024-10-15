import React from 'react';
import { OtpInput } from "../../components/OtpInput";
import { PiLockKey } from "react-icons/pi";

export const VerifyNumber = () => {
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  return (
    <div className="main-otp flex flex-col mt-40 items-center">
            <div className="h-[50px] w-[50px] bg-blue-500 rounded-full flex justify-center items-center">
              <PiLockKey
                style={{
                  backgroundColor: "#3A8EF6",
                  color: "white",
                  width: "30px",
                  height: "30px",
                  borderRadius: "100%",
                  fontSize: "0.5rem",
                }}
              />
            </div>
            <div className="text-xl text-grey mt-2 font-bold">
              Enter the OTP
            </div>
            <p className="mt-1 mb-5 text-xs">
              Enter the OTP sent on you mobile number +91 790 xxxxxxxx
            </p>
            <OtpInput />
            <button
              onClick={nextStep}
              className="px-10 py-2 mt-4 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
            >
              {" "}
              Verify Your Otp
            </button>
          </div>
  )
}
