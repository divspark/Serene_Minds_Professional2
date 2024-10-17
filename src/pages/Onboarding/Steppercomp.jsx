import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { PiLockKey } from "react-icons/pi";
import { OtpInput } from "../../components/OtpInput";
import { Select } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const Steppercomp = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        size="xs"
        styles={{
          step: {
            display: "flex",
            flexDirection: "column",
            margin: "0",
            padding: "0",
          },
          stepLabel: {
            marginTop: "10px",
          },
        }}
      >
        <Stepper.Step label="Personal Details">
          <div className="potrait-img flex flex-col justify-center items-center">
            <img
              src="man-potrait.jpeg"
              alt="potrait-img"
              className="w-[90px] h-[90px] rounded-full mt-3"
            />
            <div className="w-full flex flex-col items-center">
              <div className="flex flex-col mb-1 w-2/5">
                {" "}
                {/* Change w-2/5 to w-2/4 for 50% width */}
                <label htmlFor="name" className="py-1 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="px-5 py-2 border border-grey"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col mb-1 w-2/5">
                <label htmlFor="email" className="py-1 font-medium">
                  Email
                </label>
                <input
                  type="text"
                  className="px-5 py-2 border border-grey"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col mb-1 w-2/5">
                <label htmlFor="phone" className="py-1 font-medium">
                  Phone No.
                </label>
                <input
                  type="text"
                  className="px-5 py-2 border border-grey"
                  id="phone"
                  placeholder="Enter your Phone Number"
                />
              </div>
              <div className="flex flex-col mb-1 w-2/5">
                <label htmlFor="DOB" className="py-1 font-medium">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  name="DOB"
                  id="DOB"
                  className="px-5 py-2 border border-grey"
                />
              </div>
            </div>

            <button
              onClick={nextStep}
              className="px-10 py-2 mt-8 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
            >
              {" "}
              Proceed
            </button>
            <div className="mt-4 w-full flex justify-center items-center">
              <hr className="border-t border-gray-300 w-1/4" />
              <span className="mx-3">or</span>
              <hr className="border-t border-gray-300 w-1/4" />
            </div>

            <p className="mt-4 text-sm flex justify-center items-center">
              Already have an account?&nbsp;{" "}
              <a href="#" className="text-blue-500">
                Sign in
              </a>
            </p>
          </div>
        </Stepper.Step>
        <Stepper.Step label="Verify number">
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
            <div className="text-3xl text-grey mt-2 font-bold">
              Enter the OTP
            </div>
            <p className="mt-1 mb-5 text-sm text-[#BEBEBE]">
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
        </Stepper.Step>
        <Stepper.Step label="Professional Details">
          <div className="w-full flex flex-col items-center mt-7">
            <div className="flex flex-col mb-2 w-4/5">
              <Select
                label="What is your area of expertise"
                placeholder="Pick value"
                data={["Depression", "Anxiety", "Stress"]}
              />
            </div>
            <div className="flex flex-col mb-2 w-4/5">
              <Select
                label="What is your area of expertise"
                placeholder="Pick value"
                data={["Depression", "Anxiety", "Stress"]}
              />
            </div>
            <div className="flex flex-col mb-2 w-4/5">
              <Select
                label="What is your area of expertise"
                placeholder="Pick value"
                data={["Depression", "Anxiety", "Stress"]}
              />
            </div>
            <div className="flex flex-col mb-2 w-4/5">
              <Select
                label="What is your area of expertise"
                placeholder="Pick value"
                data={["Depression", "Anxiety", "Stress"]}
              />
            </div>
            <button
              onClick={nextStep}
              className="px-10 py-2 mt-8 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
            >
              {" "}
              Proceed
            </button>
          </div>
        </Stepper.Step>
        <Stepper.Step label="Upload Credentials">
          <div>
            <p className="pl-3 mt-2 text-lg font-semibold">
              Upload verification document
            </p>
            <p className="text-sm pl-3">
              Upload your verification document. It could be either Aadhar card,
              PAN card, or Passport.
            </p>

            <div className="pl-3 mt-4 flex justify-center">
              <label
                htmlFor="file-upload"
                className="flex flex-col justify-center w-[423px] h-[95px] mt-4 items-center cursor-pointer border-[3px] border-spacing-4 border-dashed border-[#1678F2] p-6 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                <p className="text-gray-500 font-medium">
                  Click to upload or drag and drop
                </p>
                <p className=" text-gray-400 font-normal">
                  PDF, PNG, JPG or (max. 400 x 400px)
                </p>
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden "
                accept=".pdf, .jpg, .jpeg, .png"
              />
            </div>
            <div className="flex justify-center mt-60">
              <button
                onClick={nextStep}
                className="px-10 py-2 mt-8 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
              >
                {" "}
                Proceed
              </button>
            </div>
          </div>
        </Stepper.Step>
        <Stepper.Step label="Finish Up">
          <div className="flex flex-col justify-center items-center">
            <img src="Vector.jpg" alt="vector" className="mt-6 mb-4" />
            <h2 className="text-lg font-bold text-[#444444]">
              Welcome to Serene MINDS!
            </h2>
            <p className="text-sm font-medium text-[#BEBEBE]">
              Click on complete onboarding to go to your dashboard
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/")}
                className="px-10 py-2 mt-8 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
              >
                {" "}
                Proceed
              </button>
            </div>
          </div>
        </Stepper.Step>
      </Stepper>
      {/* 
      <Group justify="center" mt="lg">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <button onClick={nextStep} className='px-10 py-2 text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]'> Proceed</button>
        <Button onClick={nextStep} className='px-10 rounded-full'>Proceed</Button>
      </Group> */}
    </>
  );
};
