// import Check from "./Pricing-images/check.svg";
import { FaCheck } from "react-icons/fa6";
// import './Pricing.css';

function Pricing() {
  return (
    <>
      {/* Flexible Plans section */}
      <section className="container">
        {/* Flexible Plans section head */}
        <div className="Plans-head flex flex-col justify-between items-center">
          <h1 className="font-bold">Flexible Plans</h1>
          <p className="font-bold text-slate-500 lg:w-2/4 sm:w-full text-center">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        {/* Flexible Plans section Cards */}
        <div className="Plans-cards mt-20 flex flex-wrap justify-center gap-5 items-center">
          {/* Card 1 */}
          <div className="bg-image-background Plans-card border rounded-2xl p-6 lg:w-[20rem] md:w-[33%] sm:w-[95%] xs:w-full flex flex-col justify-between gap-y-6">
            <h5 className="font-bold">Basic Plan</h5>
            <span className="flex items-center gap-x-2 mb-10">
              <h1 className="font-bold">$35</h1>
              <p className="size-1 text-slate-500">/month</p>
            </span>
            <ul className="font-bold flex flex-col gap-y-4 text-slate-500">
              <li className="flex items-center gap-x-2">
                <FaCheck />
                Life time free updates!
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck />
                Unlimited transactions
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck />
                Free credit-card
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck />1 year premium support
              </li>
            </ul>
            <button className="text-white py-3 rounded-2xl justify-center bg-violet-500 flex font-bold">
              Choose Basic Plan
            </button>
          </div>
          {/* Card 2 */}
          <div className="Plans-card border border-violet-500 rounded-2xl p-6 lg:w-[20rem] md:w-[33%] sm:w-[95%] xs:w-full flex flex-col justify-between gap-y-6">
            <h5 className="font-bold">Pro Plan</h5>
            <span className="flex items-center gap-x-2 mb-10">
              <h1 className="font-bold">$50</h1>
              <p className="size-1 text-slate-500">/month</p>
            </span>
            <ul className="font-bold flex flex-col gap-y-4 text-slate-500">
              <li className="flex items-center gap-x-2">
                <FaCheck />
                Life time free updates!
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck />
                Unlimited transactions
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck />
                Free credit-card
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck />2 years premium support
              </li>
            </ul>
            <button className="text-white py-3 rounded-2xl justify-center bg-violet-500 flex font-bold">
              Choose Pro Plan
            </button>
          </div>
          {/* Card 3 */}
          <div className="Plans-card border rounded-2xl p-6 lg:w-[20rem] md:w-[33%] sm:w-[95%] xs:w-full flex flex-col justify-between gap-y-6">
            <h5 className="font-bold">Premium Plan</h5>
            <span className="flex items-center gap-x-2 mb-10">
              <h1 className="font-bold">$75</h1>
              <p className="size-1 text-slate-500">/month</p>
            </span>
            <ul className="font-bold flex flex-col gap-y-4 text-slate-500">
              <li className="flex items-center gap-x-2">
                <FaCheck />
                Life time free updates!
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck />
                Unlimited transactions
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck />
                Free credit-card
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck />5 years premium support
              </li>
            </ul>
            <button className="text-white py-3 rounded-2xl justify-center bg-violet-500 flex font-bold">
              Choose Premium Plan
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
