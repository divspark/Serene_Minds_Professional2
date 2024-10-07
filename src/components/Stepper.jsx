import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

export function Stepper() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} iconPosition="top">
        <Stepper.Step label="Personal Details" description="Personal Details">
          Step 1: Enter Your Personal Details
        </Stepper.Step>
        <Stepper.Step label="Verify your number" description="Verify your number">
          Step 2: Enter the OTP
        </Stepper.Step>
        <Stepper.Step label="Professional Details" description="Professional Details">
          Step 3: Enter Professional Details
        </Stepper.Step>
        <Stepper.Step label="Upload Credentials" description="Upload Credentials">
          Step 3: Upload Your Credentials
        </Stepper.Step>
        <Stepper.Step label="Finish Up" description="Finish Up">
          Step 5: Let's Onboard your first client
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}




// import { useState } from 'react';
// import { Stepper, Button, Group } from '@mantine/core';

// function Demo() {
//   const [active, setActive] = useState(1);
//   const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
//   const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

//   return (
//     <>
//       <Stepper 
//         active={active} 
//         onStepClick={setActive} 
//         orientation="vertical" 
//         iconSize={48} // Adjust icon size if needed
//         breakpoint="sm" // Set breakpoint to handle responsiveness
//       >
//         <Stepper.Step label="First step" description="Personal Details" iconPosition="top">
//           Step 1 content: Create an account
//         </Stepper.Step>
//         <Stepper.Step label="Second step" description="Verify your number" iconPosition="top">
//           Step 2 content: Verify email
//         </Stepper.Step>
//         <Stepper.Step label="Final step" description="Get full access" iconPosition="top">
//           Step 3 content: Get full access
//         </Stepper.Step>
//         <Stepper.Completed>
//           Completed, click back button to get to previous step
//         </Stepper.Completed>
//       </Stepper>

//       <Group justify="center" mt="xl">
//         <Button variant="default" onClick={prevStep}>Back</Button>
//         <Button onClick={nextStep}>Next step</Button>
//       </Group>
//     </>
//   );
// }

// export default Demo;
