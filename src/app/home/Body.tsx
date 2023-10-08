"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Connected } from "./Connected";
import { NotConnected } from "./NotConnected";
import Loading from "./Loading"
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react";
import { ThirdwebProvider, useContract, useAddress } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";


const aichyContract = '0x50d551d48B650C466113B8A9B4541b505298ac11';
 
export function Body() {
  const { contract} = useContract(
    aichyContract
  );
  const [isLoading, setIsLoading] = useState(true); // This can be from props or other sources.
  const [displayLoading, setDisplayLoading] = useState(isLoading);
  const { connected } = useWallet();

  useEffect(() => {
    let timeoutId: number; // Explicitly type timeoutId as number

    // If isLoading becomes true, display the Loading component
    if (isLoading) {
      setDisplayLoading(true);
    } else {
      // If isLoading becomes false, wait for 3 seconds before hiding the Loading component
      timeoutId = window.setTimeout(() => { // Use window.setTimeout for better type inference
        setDisplayLoading(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoading]);
  
  if (connected) return <Connected />;

  return <NotConnected />;

}
