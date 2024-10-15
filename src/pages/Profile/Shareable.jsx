import React from 'react';
import { CiEdit, CiStar } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Shareable = () => {
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  return (
    <div className="container-5 flex  flex-col justify-center">
            <div className="main-section flex  flex-col justify-center">
              <img
                src="bg-image.jpeg"ś
                alt="bg-image"
                className="w-[728px] h-[140px] rounded-t-lg mt-3 border-none"
              />
              <img
                src="manager.png"
                alt="manager"
                className="bg-blue-500 rounded-full w-[150px] h-[150px] relative top-[-70px] left-7 border-8 border-white "
              />
              <div className="flex relative  top-[-150px] mb-4 w-[728px] h-[140px]  rounded-b-lg shadow-md">
                <div className="pshyc-details ml-56 p-3">
                  <h2 className="text-xl font-bold p-1">Jake gyll</h2>
                  <p className="p-1 text-gray-500 ">Clinical Psychologist</p>
                  <p className="p-1 text-gray-500">Manchester, UK</p>
                </div>
                <div className="p-5 ml-10">
                  <button className="border border-blue-400 text-blue-400 rounded-lg py-1 px-3 mr-3">
                    Edit Profile
                  </button>
                  <button className="border border-blue-400 text-blue-400 rounded-lg py-1 px-3">
                    Share Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="about-us flex  flex-col justify-center w-[728px] h-[140px] shadow-md border border-gray-300 p-4 relative  top-[-150px] rounded-lg">
              <h2 className="text-lg font-bold mb-2">About Me</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                animi voluptates earum eos, delectus eum hic, ut quasi quam
                asperiores exercitationem eaque iste id sequi sint molestiae
                nemo maiores mollitia!
              </p>
            </div>

            <div className="education w-[728px] border border-gray-300 p-4 mt-5 relative  top-[-150px] rounded-lg">
              <div className="flex justify-between ml-4">
                <h2 className="text-lg font-bold mb-2">Education</h2>
                <IoAddOutline style={{ color: "blue", fontSize: "24px" }} />
              </div>
              <div className="flex p-3 rounded-lg">
                <img
                  src="Education.png"
                  alt="education"
                  className="w-[70px] h-[70px]"
                />
                <div className="college-name ml-4 p-2">
                  <div className="flex justify-between">
                    <h2 className="text-lg font-bold mb-2">Bachelors</h2>
                    <CiEdit style={{ color: "blue", fontSize: "24px" }} />
                  </div>
                  <h3 className="text-md font-bold mb-2">AIIMS, New Delhi</h3>
                  <p>
                    Lorem ipsum is a placeholder text commonly used in design,
                    typography, and publishing. It originates from a scrambled
                    passage of{" "}
                  </p>
                </div>
              </div>

              <div className="flex p-3 mt-3 ">
                <img
                  src="Education.png"
                  alt="education"
                  className="w-[70px] h-[70px]"
                />
                <div className="college-name ml-4 p-2">
                  <div className="flex justify-between">
                    <h2 className="text-lg font-bold mb-2">Masters</h2>
                    <CiEdit style={{ color: "blue", fontSize: "24px" }} />
                  </div>
                  <h3 className="text-md font-bold mb-2">AIIMS, New Delhi</h3>
                  <p>
                    Lorem ipsum is a placeholder text commonly used in design,
                    typography, and publishing. It originates from a scrambled
                    passage of{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="services w-[728px] border border-gray-300 p-4 mt-5 relative  top-[-150px] rounded-lg">
              <div className="flex justify-between ml-4">
                <h2 className="text-lg font-bold mb-2">Services</h2>
                <IoAddOutline style={{ color: "blue", fontSize: "24px" }} />
              </div>
              <div className="flex p-3">
                <img
                  src="Education.png"
                  alt="education"
                  className="w-[70px] h-[70px]"
                />
                <div className="college-name ml-4 p-2">
                  <div className="flex justify-between">
                    <h2 className="text-lg font-bold mb-2">Psychologist</h2>
                    <CiEdit style={{ color: "blue", fontSize: "24px" }} />
                  </div>
                  <p>
                    Lorem ipsum is a placeholder text commonly used in design,
                    typography, and publishing. It originates from a scrambled
                    passage of{" "}
                  </p>
                </div>
              </div>

              <div className="flex p-3 mt-3">
                <img
                  src="Education.png"
                  alt="education"
                  className="w-[70px] h-[70px]"
                />
                <div className="college-name ml-4 p-2">
                  <div className="flex justify-between">
                    <h2 className="text-lg font-bold mb-2">Psychatrist</h2>
                    <CiEdit style={{ color: "blue", fontSize: "24px" }} />
                  </div>
                  <p>
                    Lorem ipsum is a placeholder text commonly used in design,
                    typography, and publishing. It originates from a scrambled
                    passage of{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="services w-[728px] border border-gray-300 p-4 mt-5 relative  top-[-150px] rounded-lg">
              <div className="flex justify-between ml-4">
                <h2 className="text-lg font-bold mb-2">Availability</h2>
              </div>
              <div className="appoint-days ml-5 flex justify-between">
                <label className="mr-36 flex items-center">
                  {/* Step 3: Render the checkbox */}
                  <input type="checkbox" className="mr-1" />
                  Mon
                </label>

                <div className="day-btn flex ml-2 mr-48 items-center">
                  <CiStar
                    style={{
                      color: "blue",
                      fontSize: "24px",
                      marginRight: "20px",
                    }}
                  />
                  <button className="px-3 border border-gray-400 rounded-xl">
                    08:00
                  </button>
                  <p className="p-2">-</p>
                  <button className="px-3 border border-gray-400 rounded-xl">
                    10:00
                  </button>
                </div>
                <div className="flex p-2 justify-between">
                  <IoAddOutline style={{ color: "blue", fontSize: "24px" }} />
                  <RiDeleteBin6Line
                    style={{
                      color: "red",
                      fontSize: "24px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>

              <div className="day-btn flex ml-[16.6rem] items-center">
                <button className="px-3 border border-gray-400 rounded-xl">
                  11:00
                </button>
                <p className="p-2">-</p>
                <button className="px-3 border border-gray-400 rounded-xl">
                  13:00
                </button>

                <div className="flex p-2 justify-between ml-[12.3rem]">
                  <IoAddOutline style={{ color: "blue", fontSize: "24px" }} />
                  <RiDeleteBin6Line
                    style={{
                      color: "red",
                      fontSize: "24px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>

              <div className="day-btn flex ml-[16.6rem] items-center">
                <button className="px-3 border border-gray-400 rounded-xl">
                  13:00
                </button>
                <p className="p-2">-</p>
                <button className="px-3 border border-gray-400 rounded-xl">
                  14:00
                </button>

                <div className="flex p-2 justify-between ml-[12.3rem]">
                  <IoAddOutline style={{ color: "blue", fontSize: "24px" }} />
                  <RiDeleteBin6Line
                    style={{
                      color: "red",
                      fontSize: "24px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>

              <div className="day-btn flex ml-[16.6rem] items-center">
                <button className="px-3 border border-gray-400 rounded-xl">
                  15:00
                </button>
                <p className="p-2">-</p>
                <button className="px-3 border border-gray-400 rounded-xl">
                  16:00
                </button>

                <div className="flex p-2 justify-between ml-[12.3rem]">
                  <IoAddOutline style={{ color: "blue", fontSize: "24px" }} />
                  <RiDeleteBin6Line
                    style={{
                      color: "red",
                      fontSize: "24px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>


            </div>

            <div className="services w-[728px] border border-gray-300 p-4 mt-5 relative  top-[-150px] rounded-lg">
              <div className="flex justify-between ml-4">
                <h2 className="text-lg font-semibold mb-2">Payment</h2>
                <IoAddOutline style={{ color: "blue", fontSize: "24px" }} />
              </div>
              <h2 className="text-2xl font-bold mb-2 ml-4">INR 700/session</h2>
            </div>
          </div>
  )
}
