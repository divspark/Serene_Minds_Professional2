import React from "react";

export const UploadCredentials = () => {
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  return (
    <div>
      <p className="pl-3 mt-2 text-lg font-semibolds">
        Upload verification document
      </p>
      <p className="text-sm pl-3">
        Upload your verification document. It could be either Aadhar card, PAN
        card or Passport.
      </p>
    </div>
  );
};
