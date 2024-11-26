// PaymentComponent.jsx

import React, { useState } from 'react';

const PaymentComponent = () => {
  const [appointmentDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    contact: "998765789070",
    appointmentDate: "2024-12-01",
    appointmentTime: "10:00 AM",
    amount: 6900, // Amount in paise for INR (₹69.00)
  });

  const createOrder = async () => {
    try {
      const response = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: appointmentDetails.amount,
          currency: "INR",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.error);
        alert(data.error.error.description || "Failed to create order");
        return;
      }

      return data.id; // Return the order ID
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      alert("Something went wrong while creating the order.");
    }
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const razorpay_order_id = await createOrder();
    console.log("razorpay_order_id :: ", razorpay_order_id);
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Get the Razorpay key from environment variables
      name: "Connect India Japan",
      currency: "INR",
      amount: appointmentDetails.amount.toString(),
      order_id: razorpay_order_id,
      description: "Thank you for your test donation",
      image: "/images/logo.svg",
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: appointmentDetails.name,
        email: appointmentDetails.email,
        contact: appointmentDetails.contact,
      },
      theme: {},
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Appointment Payment</h2>
      
      <form className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Name:</label>
          <p>{appointmentDetails.name}</p>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Email:</label>
          <p>{appointmentDetails.email}</p>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Contact:</label>
          <p>{appointmentDetails.contact}</p>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Appointment Date:</label>
          <p>{appointmentDetails.appointmentDate}</p>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Appointment Time:</label>
          <p>{appointmentDetails.appointmentTime}</p>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Fees:</label>
          <p>₹{(appointmentDetails.amount / 100).toFixed(2)}</p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={makePayment}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentComponent;
