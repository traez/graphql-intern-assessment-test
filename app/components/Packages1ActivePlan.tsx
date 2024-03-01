"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

const Packages1ActivePlan = () => {
  const { pricingData, subscribed } = useContext(StateContext)!;

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
      return 'monthly';
    } else if (subscribed === 'B' || subscribed === 'D' || subscribed === 'F') {
      return 'annually';
    }
    return '';
  };

  const termToDisplay = getTerm();

  return (
    <div className="flex flex-col justify-center px-3 py-4 mt-3.5 w-full bg-teal-50 rounded-xl border border-solid border-[color:#ADEFDF]">
      <div className="flex gap-2 justify-start font-semibold text-center leading-[160%] w-full">
        <div className="px-4 py-0.5 text-xs text-white rounded bg-indigo-950 w-[25%] uppercase">
          {plan2Display}
        </div>
        <div className="px-4 py-0.5 my-auto text-xs whitespace-nowrap bg-white rounded border border-solid border-[color:#8C93A3] text-slate-600 w-[25%] capitalize">
          {termToDisplay}
        </div>
      </div>
      <div className="text-2xl font-bold leading-9 text-indigo-950">
        N {price2Display}
      </div>
      <div className="flex gap-5 justify-between">
        <div className="text-xs font-medium leading-5 text-indigo-950">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="flex gap-1 self-end mt-6 text-xs leading-4 text-center whitespace-nowrap">
          <div className="grow font-medium text-gray-400">Days left</div>
          <div className="font-semibold text-indigo-950">25</div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-1.5 mt-2 text-xs font-semibold leading-5 text-gray-400 whitespace-nowrap rounded bg-zinc-200">
        Renew
      </div>
    </div>
  );
};

export default Packages1ActivePlan;
