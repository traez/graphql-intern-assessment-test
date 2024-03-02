/*
The StateProvider 
*/
"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import Packages1 from "./components/Packages1";
import InsurancePlans from "./components/InsurancePlans";
import Payment3 from "./components/Payment3";

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

interface StateContextType {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  stepsComponents: React.ReactNode[];
  handleBack: () => void;
  handleNext: () => void;
  hasActivePlan: boolean;
  pricingData: {
    monthly: { plan: string; price: string; term: string }[];
    annually: { plan: string; price: string; term: string }[];
  };
  isMonthly: boolean;
  toggleIsMonthly: () => void;
  subscribed: string | null;
  handleSubBasic: () => void;
  handleSubStandard: () => void;
  handleSubPremium: () => void;
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [hasActivePlan, setHasActivePlan] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [subscribed, setSubscribed] = useState<string | null>(null);
  const pricingData = {
    monthly: [
      { plan: "Basic", price: "3,500", term: "/month" },
      { plan: "Standard", price: "6,000", term: "/month" },
      { plan: "Premium", price: "8,000", term: "/month" },
    ],
    annually: [
      { plan: "Basic", price: "42,000", term: "/year" },
      { plan: "Standard", price: "72,000", term: "/year" },
      { plan: "Premium", price: "96,000", term: "/year" },
    ],
  };

  const stepsComponents: React.ReactNode[] = [
    <Packages1 key={1} />,
    <InsurancePlans key={2} />,
    <Payment3 key={3} />,
  ];

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(0, prevStep - 1));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) =>
      Math.min(stepsComponents.length - 1, prevStep + 1)
    );
  };

  const toggleIsMonthly = () => setIsMonthly((prevIsMonthly) => !prevIsMonthly);

  const handleSubBasic = () => {
    if (!hasActivePlan) {
      setHasActivePlan(true);
      setSubscribed(isMonthly ? "A" : "B");
      setTimeout(() => {
        handleNext();
      }, 3000);
    } else {
      setHasActivePlan(false);
      setSubscribed(null);
    }
  };

  const handleSubStandard = () => {
    if (!hasActivePlan) {
      setHasActivePlan(true);
      setSubscribed(isMonthly ? "C" : "D");
      setTimeout(() => {
        handleNext();
      }, 3000);
    } else {
      setHasActivePlan(false);
      setSubscribed(null);
    }
  };

  const handleSubPremium = () => {
    if (!hasActivePlan) {
      setHasActivePlan(true);
      setSubscribed(isMonthly ? "E" : "F");
      setTimeout(() => {
        handleNext();
      }, 3000);
    } else {
      setHasActivePlan(false);
      setSubscribed(null);
    }
  };

  return (
    <StateContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        stepsComponents,
        handleBack,
        handleNext,
        hasActivePlan,
        pricingData,
        isMonthly,
        toggleIsMonthly,
        subscribed,
        handleSubBasic,
        handleSubStandard,
        handleSubPremium,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
