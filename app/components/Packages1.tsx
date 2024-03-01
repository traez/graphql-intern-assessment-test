"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";
import Packages1ActivePlan from "./Packages1ActivePlan";

const Packages1 = () => {
  const { hasActivePlan, handleNext } = useContext(StateContext)!;

  return (
    <div className="flex flex-col justify-center mx-auto w-full bg-white max-w-[480px]">
      <span className="w-full flex justify-end pr-4 pt-2">
        <a
          href="https://github.com/traez/graphql-intern-assessment-test"
          target="_blank"
          className="text-sm font-medium leading-6 text-sky-900 hover:underline hover:text-sky-500  "
        >
          Graphql Intern Assessment Test
        </a>
      </span>
      <div className="flex flex-col pb-12 w-full bg-white rounded-3xl">
        <div className="flex flex-col px-6 mt-6 mb-32 w-full">
          <div className="text-xl font-bold leading-8 text-slate-700">
            Packages
          </div>
          {/*Health insurance */}
          <div
            className="flex gap-2 items-center py-4 pr-3 pl-6 mt-12 text-black bg-lime-50 rounded-xl border border-solid border-[color:#D4F9AC] hover:border-black cursor-pointer"
            onClick={handleNext}
          >
            <img
              loading="lazy"
              src="/images/svg-heart.svg"
              className="self-stretch my-auto aspect-square w-[49px]"
            />
            <div className="flex flex-col flex-1 justify-center self-stretch">
              <div className="text-base font-semibold leading-6">
                Health insurance
              </div>
              <div className="text-sm font-medium leading-6">
                Subscribe to your preferred insurance packages{" "}
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/svg-arrow-right.svg"
              className="self-stretch my-auto w-6 aspect-square"
            />
          </div>
          {/*Consultation */}
          <div className="flex gap-2 items-center py-4 pr-3 pl-6 mt-6 bg-sky-100 rounded-xl border border-solid border-[color:#A7C9FD] hover:border-black cursor-pointer">
            <img
              loading="lazy"
              src="/images/svg-phone.svg"
              className="self-stretch my-auto aspect-square w-[49px]"
            />

            <div className="flex flex-col flex-1 justify-center self-stretch">
              <div className="text-base font-semibold leading-6 text-black">
                Consultation
              </div>
              <div className="text-sm font-medium leading-6 text-black">
                Book sessions with pathologist to review and prescribe drugs
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/svg-arrow-right.svg"
              className="self-stretch my-auto w-6 aspect-square"
            />
          </div>
          {/* Prescription */}
          <div className="flex gap-2 items-center py-4 pr-3 pl-6 mt-6 bg-yellow-50 rounded-xl border border-solid border-[color:#FFE89E] hover:border-black cursor-pointer">
            <img
              loading="lazy"
              src="/images/svg-heartbeat.svg"
              className="self-stretch my-auto aspect-square w-[49px]"
            />
            <div className="flex flex-col flex-1 justify-center self-stretch">
              <div className="text-base font-semibold leading-6 text-black">
                Prescription
              </div>
              <div className="text-sm font-medium leading-6 text-black">
                view and manage all your prescriptions here.
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/svg-arrow-right.svg"
              className="self-stretch my-auto w-6 aspect-square"
            />
          </div>
          {/* Footer */}
          <div className="self-start mt-16 text-base font-semibold leading-6 text-black whitespace-nowrap">
            Current subscription
          </div>
          {hasActivePlan ? (
            <Packages1ActivePlan />
          ) : (
            <div className="self-start mt-2.5 text-sm font-medium leading-6 text-gray-400">
              No active plan
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Packages1;

/* 
 <div className="self-start mt-2.5 text-sm font-medium leading-6 text-gray-400">
            No active plan
          </div>

*/
