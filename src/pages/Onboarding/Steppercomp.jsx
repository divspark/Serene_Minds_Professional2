import React , { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { PersonalDetails } from "./PersonalDetails";
import { VerifyNumber } from "./VerifyNumber";
import { ProfessionalDetails } from "./ProfessionalDetails";
import { UploadCredentials } from "./UploadCredentials";

export const Steppercomp = () => {
  const [active, setActive] = useState(1);
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
          <PersonalDetails />
        </Stepper.Step>
        <Stepper.Step label="Verify number">
          <VerifyNumber />
        </Stepper.Step>
        <Stepper.Step label="Professional Details">
          <ProfessionalDetails />
        </Stepper.Step>
        <Stepper.Step label="Upload Credentials">
          <UploadCredentials />
        </Stepper.Step>
        <Stepper.Step label="Finish Up">Step 5: Finish Up</Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
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
