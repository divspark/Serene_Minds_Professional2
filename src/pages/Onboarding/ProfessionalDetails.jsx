import React from 'react';
import { Select } from "@mantine/core";

export const ProfessionalDetails = () => {
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  return (
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
  )
}
