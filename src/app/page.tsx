'use client'
import dynamic from "next/dynamic";
import { Body } from "./home/Body";
import { ThemeProvider, ColorModeProvider, ChakraProvider } from "@chakra-ui/react"
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";


export default function Home() {
  return (
    <main className="flex flex-col">
      <ThirdwebProvider>
      <Header />
      <Body />
      </ThirdwebProvider>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 mt-10 z-10 flex flex-col sm:flex-row justify-between px-6 py-4  shadow-md w-full">
      <img src="./sc.gif" className="ml-32 w-24 h-24"></img>
      
      <ConnectWallet />
    </header>
  );
}

