"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

const Subscription2 = () => {
  const {
    handleBack,
    pricingData,
    isMonthly,
    toggleIsMonthly,
    hasActivePlan,
    subscribed,
    handleSubBasic,
    handleSubStandard,
    handleSubPremium,
  } = useContext(StateContext)!;

  const getSelectedPricingData = () => {
    return isMonthly ? pricingData.monthly : pricingData.annually;
  };

  const selectedPricingData = getSelectedPricingData();

  return (
    <div className="flex flex-col items-center pb-12 mx-auto w-full bg-white max-w-[480px]">
      <span className="w-full flex justify-end pr-4 pt-2">
        <a
          href="https://github.com/traez/graphql-intern-assessment-test"
          target="_blank"
          className="text-sm font-medium leading-6 text-sky-900 hover:underline hover:text-sky-500  "
        >
          Graphql Intern Assessment Test
        </a>
      </span>

      <div
        onClick={handleBack}
        className="flex gap-2 justify-between self-stretch px-6 py-1.5 w-full"
      >
        <div className="flex justify-center items-center px-3 w-11 h-11 bg-white rounded border border-solid shadow-sm aspect-square border-[color:#CACDD5] hover:border-black cursor-pointer">
          <img
            loading="lazy"
            src="/images/svg-arrow-left.svg"
            className="w-full aspect-square"
          />
        </div>
        <div className="grow justify-center items-start px-14 py-2 my-auto text-base font-semibold leading-6 text-center text-slate-700">
          Health insurance
        </div>
      </div>
      <div className="mt-5 text-sm font-semibold leading-6 text-center whitespace-nowrap text-slate-600">
        Subscribe to your preferred insurance packages{" "}
      </div>
      <div className="flex gap-5 justify-between px-5 py-0.5 mt-2 w-full text-sm font-semibold leading-6 whitespace-nowrap bg-gray-100 rounded-lg max-w-[342px] text-indigo-950">
        <div
          onClick={toggleIsMonthly}
          className={`justify-center px-14 py-2 bg-gray-300 rounded cursor-pointer hover:text-emerald-600 ${
            isMonthly ? "bg-gray-400" : "bg-gray-200"
          }`}
        >
          Monthly
        </div>
        <div
          className={`flex-auto my-auto cursor-pointer hover:text-emerald-600 px-14 py-2 rounded ${
            isMonthly ? "bg-gray-200" : "bg-gray-400"
          }`}
          onClick={toggleIsMonthly}
        >
          Annually
        </div>
      </div>
      <div
        className={`flex flex-col justify-center p-3 mt-6 w-full rounded-xl border border-solid ${
          subscribed === "A" || subscribed === "B"
            ? "bg-teal-50 border-[color:#ADEFDF]"
            : "bg-neutral-100 border-[color:#EEEFF2]"
        } max-w-[343px]`}
      >
        <div
          className={`justify-center self-start px-4 py-0.5 text-xs font-semibold leading-5 text-center whitespace-nowrap rounded border border-solid aspect-[3.04] border-[color:#E2E4E8] ${
            subscribed === "A" || subscribed === "B"
              ? "text-white bg-indigo-950"
              : "text-slate-700 bg-gray-100"
          }`}
        >
          BASIC
        </div>
        <div className="flex gap-1 justify-between whitespace-nowrap">
          <div className="text-2xl font-bold leading-9 text-indigo-950">
            N {selectedPricingData[0].price}
          </div>
          <div className="flex-auto my-auto text-xs font-medium leading-5 text-slate-600">
            {selectedPricingData[0].term}
          </div>
        </div>
        <div className="text-xs font-medium leading-5 text-indigo-950">
          This plans covers for your most basic needs and regular treatments
        </div>
        <div
          onClick={handleSubBasic}
          className={`flex justify-center items-center px-16 py-1.5 mt-3 text-xs font-semibold leading-5 whitespace-nowrap rounded border border-solid shadow-sm ${
            subscribed === "A" || subscribed === "B"
              ? "bg-emerald-500 text-white"
              : "bg-white text-slate-600 border-[color:#CACDD5]"
          } hover:border-black cursor-pointer hover:text-sm`}
        >
          {hasActivePlan && (subscribed === "A" || subscribed === "B")
            ? "Subscribed"
            : "Subscribe"}
        </div>
      </div>
      <div
        className={`flex flex-col justify-center px-3 py-4 mt-5 w-full rounded-xl border border-solid ${
          subscribed === "C" || subscribed === "D"
            ? "bg-teal-50 border-[color:#ADEFDF]"
            : "bg-neutral-100 border-[color:#EEEFF2]"
        } max-w-[343px]`}
      >
        <div
          className={`flex justify-start px-4 py-0.5 text-xs font-semibold leading-5 text-center rounded w-3/5 ${
            subscribed === "C" || subscribed === "D"
              ? "text-white bg-indigo-950"
              : "text-slate-700 bg-gray-100"
          }`}
        >
          STANDARD - RECOMMENED
        </div>
        <div className="flex gap-1 justify-between whitespace-nowrap">
          <div className="text-2xl font-bold leading-9 text-indigo-950">
            N {selectedPricingData[1].price}
          </div>
          <div className="flex-auto my-auto text-xs font-medium leading-5 text-slate-600">
            {selectedPricingData[1].term}
          </div>
        </div>
        <div className="text-xs font-medium leading-5 text-indigo-950">
          This plans covers for your most basic needs and regular treatments
        </div>
        <div
          onClick={handleSubStandard}
          className={`flex justify-center items-center px-16 py-1.5 mt-2 text-xs font-semibold leading-5 whitespace-nowrap rounded shadow-sm ${
            subscribed === "C" || subscribed === "D"
              ? "bg-emerald-500 text-white"
              : "bg-white text-slate-600 border-[color:#CACDD5]"
          } hover:border-black cursor-pointer hover:text-sm`}
        >
          {hasActivePlan && (subscribed === "C" || subscribed === "D")
            ? "Subscribed"
            : "Subscribe"}
        </div>
      </div>
      <div className={`flex flex-col justify-center p-3 mt-5 w-full rounded-xl border border-solid ${
    subscribed === "E" || subscribed === "F"
      ? "bg-teal-50 border-[color:#ADEFDF]"
      : "bg-neutral-100 border-[color:#EEEFF2]"
  } max-w-[343px]`}>
        <div className={`justify-center self-start px-4 py-0.5 text-xs font-semibold leading-5 text-center whitespace-nowrap rounded border border-solid ${
    subscribed === "E" || subscribed === "F"
      ? "text-white bg-indigo-950 border-[color:#E2E4E8]"
      : "text-slate-700 bg-gray-100 border-[color:#E2E4E8]"
  }`}>
          PREMIUM
        </div>
        <div className="flex gap-1 justify-between whitespace-nowrap">
          <div className="text-2xl font-bold leading-9 text-indigo-950">
            N {selectedPricingData[2].price}
          </div>
          <div className="flex-auto my-auto text-xs font-medium leading-5 text-gray-400">
            {selectedPricingData[2].term}
          </div>
        </div>
        <div className="text-xs font-medium leading-5 text-indigo-950">
          This plans covers for your most basic needs and regular treatments
        </div>
        <div
          onClick={handleSubPremium}
          className={`flex justify-center items-center px-16 py-1.5 mt-3 text-xs font-semibold leading-5 whitespace-nowrap rounded border border-solid shadow-sm ${
            subscribed === "E" || subscribed === "F"
              ? "bg-emerald-500 text-white"
              : "bg-white text-slate-600 border-[color:#CACDD5]"
          } hover:border-black hover:text-sm cursor-pointer`}
        >
          {hasActivePlan && (subscribed === "E" || subscribed === "F")
            ? "Subscribed"
            : "Subscribe"}
        </div>
      </div>
    </div>
  );
};

export default Subscription2;
