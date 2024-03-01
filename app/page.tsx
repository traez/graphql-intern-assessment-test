"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";

export default function Home() {
  const {
    currentStep,
    stepsComponents,
  } = useContext(StateContext)!;

  return <>{stepsComponents[currentStep]}</>;
}

/*
  main 
*/
