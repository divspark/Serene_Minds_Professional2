/* eslint-disable react/prop-types */
import { useState } from 'react';
import { monthlyPlans, yearlyPlans } from '../config/data';  // Import the data

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const plans = selectedPlan === 'monthly' ? monthlyPlans : yearlyPlans;

  return (
    <div className="relative isolate text-[#9995AF] font-medium bg-white px-6 py-10 lg:px-8">
      {/* Toggle Buttons */}
      <div className="items-center flex justify-center space-x-5">
        <button
          className={`text-lg ${selectedPlan === 'monthly' ? 'text-blue-500 border-b-2 border-blue-400' : ''}`}
          onClick={() => setSelectedPlan('monthly')}
        >
          Monthly
        </button>
        <button
          className={`text-lg ${selectedPlan === 'yearly' ? 'text-blue-500 border-b-2 border-blue-400' : ''}`}
          onClick={() => setSelectedPlan('yearly')}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 gap-x-10 sm:mt-20 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            buttonText="Get started today"
            isPremium={plan.plan === "Pro"}
            priceSuffix={selectedPlan === 'yearly' ? "/year" : "/month"}
          />
        ))}
      </div>
    </div>
  );
};

const PricingCard = ({ plan, price, features, isPremium, buttonText, priceSuffix }) => {
  return (
    <section
      className={`${
        isPremium
          ? "relative rounded-3xl bg-gray-900 h-[530px] p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10"
          : "bg-white/60 p-8 ring-1 ring-gray-900/10 sm:p-10 lg:rounded-bl-3xl"
      }`}
    >
      {/* Plan Title */}
      <h3 className={`text-base font-semibold ${isPremium ? "text-indigo-400" : "text-indigo-600"}`}>
        {plan}
      </h3>

      {/* Price */}
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className={`text-5xl font-semibold ${isPremium ? "text-white" : "text-gray-900"}`}>
          {price}
        </span>
        <span className={`${isPremium ? "text-gray-400" : "text-gray-500"}`}>{priceSuffix}</span>
      </p>

      {/* Description */}
      <p className={`mt-6 text-base ${isPremium ? "text-gray-300" : "text-gray-600"}`}>
        {isPremium
          ? "Dedicated support and infrastructure for your company."
          : "The perfect plan if you're just getting started with our product."}
      </p>

      {/* Features List */}
      <ul className="mt-8 space-y-3 text-sm sm:mt-10">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-x-3">
            <svg
              className={`h-6 w-5 flex-none ${isPremium ? "text-indigo-400" : "text-indigo-600"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <a
        href="#"
        className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold ${isPremium
          ? "text-indigo-400 ring-1 ring-inset ring-gray-200 hover:ring-gray-300"
          : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
        }`}
      >
        {buttonText}
      </a>
    </section>
  );
};

export default Membership;
