"use client";
import { useState, useEffect, useContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { StateContext } from "./StateProvider";

export default function Home() {
  const { currentStep, stepsComponents } = useContext(StateContext)!;

  const client = new ApolloClient({
    uri: "https://test2024.peddlesoftdev.xyz/graphql/",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        {stepsComponents[currentStep]}
      </ApolloProvider>
    </>
  );
}

/*
  main 
*/
