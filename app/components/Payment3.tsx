"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

const Payment3 = () => {
  const { handleBack, pricingData, subscribed } = useContext(StateContext)!;

  const handleButtonClick = () => {
    alert('Payment confirmed!');
  };

  interface PlanData {
    plan: string;
    price: string;
    term: string;
  }

  const getPlanOrPrice = (type: 'plan' | 'price'): string => {
    let planData: PlanData;

    if (subscribed === 'A') {
      planData = pricingData.monthly[0];
    } else if (subscribed === 'B') {
      planData = pricingData.annually[0];
    } else if (subscribed === 'C') {
      planData = pricingData.monthly[1];
    } else if (subscribed === 'D') {
      planData = pricingData.annually[1];
    } else if (subscribed === 'E') {
      planData = pricingData.monthly[2];
    } else if (subscribed === 'F') {
      planData = pricingData.annually[2];
    } else {
      return '';
    }

    return planData[type];
  };

  const plan2Display = getPlanOrPrice('plan');
  const price2Display = getPlanOrPrice('price');

  const getTerm = () => {
    if (subscribed === 'A' || subscribed === 'C' || subscribed === 'E') {
      return 'month';
    } else if (subscribed === 'B' || subscribed === 'D' || subscribed === 'F') {
      return 'annum';
    }
    return '';
  };

  const termToDisplay = getTerm();

  return (
    <div className="flex flex-col justify-center mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col pb-12 w-full bg-white rounded-3xl">
        <span className="w-full flex justify-end pr-4 pt-2">
          <a
            href="https://github.com/traez/graphql-intern-assessment-test"
            target="_blank"
            className="text-sm font-medium leading-6 text-sky-900 hover:underline hover:text-sky-500  "
          >
            Graphql Intern Assessment Test
          </a>
        </span>
        <div className="flex gap-2 justify-between px-6 py-1.5 w-full">
          <div
            onClick={handleBack}
            className="flex justify-center items-center px-3 w-11 h-11 bg-white rounded border border-solid shadow-sm aspect-square border-[color:#CACDD5] hover:border-black cursor-pointer"
          >
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
        <div className="flex flex-col px-6 mt-6 mb-10 w-full">
          <div className="flex flex-col justify-center items-center px-20 py-4 w-full font-semibold whitespace-nowrap bg-teal-50 rounded-lg border border-solid border-[#ADEFDF]">
            <div className="text-base leading-6 text-slate-600 capitalize">
              {plan2Display}
            </div>
            <div className="flex gap-1 text-3xl leading-10 text-indigo-950">
              <div>N</div>
              <div>{price2Display}</div>
              <div className="grow my-auto text-base font-medium leading-6 text-gray-400">
                /{termToDisplay}
              </div>
            </div>
          </div>
          <div className="mt-11 text-lg font-semibold leading-7 text-black">
            Payment details
          </div>
          <div className="flex gap-3.5 items-center px-3 py-2 mt-5 rounded-lg border border-solid border-[color:#EEEFF2]">
            <img
              loading="lazy"
              src="/images/png-access-logo.png"
              className="self-stretch w-9 aspect-square"
            />
            <div className="flex-auto self-stretch my-auto text-sm font-semibold leading-6 text-indigo-950">
              Access master card (**2154)
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto aspect-square border-emerald-500 border-2 rounded-[50%] h-6">
              <div className="flex flex-col items-center justify-center p-1 rounded-full aspect-square stroke-[2px]">
                <div className="w-3 shrink-0 h-3 bg-emerald-500 rounded-[50%] " />
              </div>
            </div>
          </div>
          <div className="shrink-0 mt-5 h-px bg-gray-300" />
          <div className="flex flex-col justify-center px-3 py-3.5 mt-5 w-full text-sm font-semibold leading-6 whitespace-nowrap bg-white rounded border border-solid border-[color:#E2E4E8] text-slate-600">
            <div className="flex gap-5 justify-between w-full">
              <div className="flex gap-2 justify-between">
                <img
                  loading="lazy"
                  src="/images/svg-mastercard.svg"
                  className="self-start w-5 aspect-square"
                />
                <div className="grow">5324 5632 8424 3284</div>
              </div>
              <img
                loading="lazy"
                src="/images/svg-arrow-down.svg"
                className="self-start w-5 aspect-square"
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-5 text-base font-semibold leading-6 whitespace-nowrap text-slate-600">
            <div className="grow justify-center px-3 py-3 bg-white rounded-lg border border-solid border-[color:#E2E4E8]">
              08/23
            </div>
            <div className="grow justify-center px-3 py-3 bg-white rounded-lg border border-solid border-[color:#E2E4E8]">
              314
            </div>
          </div>
          <div className="flex gap-4 justify-between mt-7 text-xs font-medium leading-5 text-gray-400">
            <input type="checkbox" className="w-5 h-5" />
            <div className="flex-auto">Save card for future payments</div>
          </div>
          <div onClick={handleButtonClick} className="flex justify-center items-center px-16 py-2.5 mt-14 text-base font-semibold leading-6 text-white whitespace-nowrap bg-emerald-500 rounded shadow-sm cursor-pointer hover:text-lg">
            Confirm payment
          </div>
          <div className="self-center mt-16 text-sm font-semibold leading-6 whitespace-nowrap text-slate-600">
            Choose other payment methods
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment3;
