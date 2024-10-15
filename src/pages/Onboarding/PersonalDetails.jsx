import React from 'react'

export const PersonalDetails = () => {
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  return (
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
                <label htmlFor="name" className="py-1">
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
                <label htmlFor="email" className="py-1">
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
                <label htmlFor="phone" className="py-1">
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
                <label htmlFor="DOB" className="py-1">
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
  )
}
