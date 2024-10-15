import React from 'react';
import { CiEdit, CiStar } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";


export const Professional = () => {
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  return (
    <>
    <div className="pro-details w-[728px]  p-4 mt-5 relative rounded-lg border-l-4 border-blue-400 shadow-lg">
            <div className="flex justify-between ml-4">
              <h2 className="text-md  mb-2">What is your area of expertise?</h2>
              <CiEdit style={{ color: "blue", fontSize: "24px" }} />
            </div>
            <h2 className="text-lg font-semibold mb-2 pl-4">Psychologist</h2>
          </div>

          <div className="pro-details w-[728px]  p-4 mt-5 relative rounded-lg border-l-4 border-blue-400 shadow-lg">
            <div className="flex justify-between ml-4">
              <h2 className="text-md  mb-2">What is your area of expertise?</h2>
              <CiEdit style={{ color: "blue", fontSize: "24px" }} />
            </div>
            <h2 className="text-lg font-semibold mb-2 pl-4">Psychologist</h2>
          </div>

          <div className="pro-details w-[728px]  p-4 mt-5 relative rounded-lg border-l-4 border-blue-400 shadow-lg">
            <div className="flex justify-between ml-4">
              <h2 className="text-md  mb-2">What is your area of expertise?</h2>
              <CiEdit style={{ color: "blue", fontSize: "24px" }} />
            </div>
            <h2 className="text-lg font-semibold mb-2 pl-4">Psychologist</h2>
          </div>

          <div className="pro-details w-[728px]  p-4 mt-5 relative rounded-lg border-l-4 border-blue-400 shadow-lg">
            <div className="flex justify-between ml-4">
              <h2 className="text-md  mb-2">What is your area of expertise?</h2>
              <CiEdit style={{ color: "blue", fontSize: "24px" }} />
            </div>
            <h2 className="text-lg font-semibold mb-2 pl-4">Psychologist</h2>
          </div>

          <div className="pro-details w-[728px]  p-4 mt-5 relative rounded-lg border-l-4 border-blue-400 shadow-lg">
            <div className="flex justify-between ml-4">
              <h2 className="text-md  mb-2">What is your area of expertise?</h2>
              <CiEdit style={{ color: "blue", fontSize: "24px" }} />
            </div>
            <h2 className="text-lg font-semibold mb-2 pl-4">Psychologist</h2>
          </div>

          <div className="pro-details w-[728px]  p-4 mt-5 relative rounded-lg border-l-4 border-blue-400 shadow-lg">
            <div className="flex justify-between ml-4">
              <h2 className="text-md  mb-2">What is your area of expertise?</h2>
              <CiEdit style={{ color: "blue", fontSize: "24px" }} />
            </div>
            <h2 className="text-lg font-semibold mb-2 pl-4">Psychologist</h2>
          </div>

          <div className="pro-details w-[728px]  p-4 mt-5 relative rounded-lg border-l-4 border-blue-400 shadow-lg">
            <div className="flex justify-between ml-4">
              <h2 className="text-md  mb-2">What is your area of expertise?</h2>
              <CiEdit style={{ color: "blue", fontSize: "24px" }} />
            </div>
            <h2 className="text-lg font-semibold mb-2 pl-4">Psychologist</h2>
          </div>

          <div className="flex justify-center">
            <button
              onClick={nextStep}
              className="px-7 py-2 mt-8 mb-2 flex justify-center text-white rounded-full bg-[linear-gradient(to_right,#3A8EF6,#6F3AFA)]"
            >
              {" "}
              Save Changes
            </button>
          </div>
          </>
  )
}
