import { useState } from "react";
import { Modal, Button } from "@mantine/core";
import { MdContentCopy } from "react-icons/md";
// import qrCodeSrc from "../assets/icons/qr_code.jpg";

export function AddClientModal({ opened, close }) {
  const [link] = useState(
    "https://www.pexels.com/photo/man-in-gray-long-sleeve-shirt-123456/"
  );
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");

  // Handle copying the link to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  // Handle sending the email
  const handleEmailSubmit = () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`Invitation sent to: ${email}`);
    setEmail("");
    setShowEmailInput(false);
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Add new client"
      size="lg"
      centered
      classNames={{
        modal: "p-6 rounded-lg",
        title: "text-lg font-bold mb-4",
      }}
    >
      <div className="space-y-6 text-center">
        <p className="text-gray-700 font-medium">
          Share the link or scan the QR code to onboard the client
        </p>

        {/* Input field with copy button */}
        <div className="flex items-center border mx-20 border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            value={link}
            readOnly
            className="flex-grow px-3 py-2 text-gray-600 bg-gray-100 outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-3 py-2 bg-blue-500 text-white hover:bg-blue-600"
          >
            <MdContentCopy className="text-lg" />
          </button>
        </div>

        {/* QR Code Display */}
        <div className="flex justify-center">
          <img
            src='/qr.png'
            alt="QR Code"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Prompt to invite via email */}
        <p className="text-sm text-gray-500">
          If unable to scan the QR code,{" "}
          <button
            onClick={() => setShowEmailInput(!showEmailInput)}
            className="text-blue-500 font-medium hover:underline"
          >
            enter email
          </button>{" "}
          of the client to invite.
        </p>

        {/* Email input form */}
        {showEmailInput && (
          <div className="space-y-4 mx-20">
            <input
              type="email"
              placeholder="Enter client's email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              onClick={handleEmailSubmit}
              className="w-full bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] text-white py-2 rounded-md hover:from-[#3477e4] hover:to-[#5633d9]"
            >
              Send Invitation
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}
