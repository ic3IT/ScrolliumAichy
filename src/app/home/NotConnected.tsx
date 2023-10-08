"use client";

import React, { useState } from "react";
import { useTypingEffect } from "@/utils/useTypingEffect";
import { Pet } from "./Pet";
import { PiShuffleAngularFill } from "react-icons/pi";
import { Box } from "@chakra-ui/react";


const defaultPet: Pet = {
  name: "Unknown",
  health_points: 0,
  happiness: 0,
  parts: [],
};

export function NotConnected() {
  const [activePet, setActivePet] = useState<number[]>([0, 0, 0]);
  const [selectedAction, setSelectedAction] = useState<"feed" | "play">("feed");

  const text = useTypingEffect(
    `Join AichyRealm: the next-level Tamagotchi-inspired game. Connect your wallet, hatch your Aichy, and immerse yourself in its digital life. Play, nurture, and watch its progression. Your Aichy adventure awaits. 🎮
`
  );

  const handleShuffle = () => {
    const randomPet = [
      Math.floor(Math.random() * Number(process.env.NEXT_PUBLIC_BODY_OPTIONS)),
      Math.floor(Math.random() * Number(process.env.NEXT_PUBLIC_EAR_OPTIONS)),
      Math.floor(Math.random() * Number(process.env.NEXT_PUBLIC_FACE_OPTIONS)),
    ];
    setActivePet(randomPet);

    const actions = ["feed", "play"];
    const randomAction = actions[Math.floor(Math.random() * actions.length)] as
      | "feed"
      | "play";
    setSelectedAction(randomAction);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col self-center items-center mt-5">
        <img src='./aichy2.gif' className="w-320 h-200"></img>
        <Box
              onClick={handleShuffle}
              width="20rem"
              display="flex" // Set this to flex
              color="white"
              alignItems="center" // Center content vertically
              justifyContent="center" // Center content horizontally
              margin="20px px"
              cursor="pointer"
              className="animate-bounce0"
              boxShadow="lg"
              border="2px solid"
              borderColor="#FFFFFF"
              _hover={{ bg: "gray.200" }}
              role="button"
              transition="0.3s"
              padding="20px 20px" // Adjust the size of the box around the content
              fontSize="1.5rem" // Increase the font size
              fontWeight="bold" // Make the text bold for emphasis
            >
              Mint Now
            </Box>
      </div>
      <div className="mt-16">
      <div className="nes-container is-dark with-title">

        <p className="title">Welcome</p>
        <p>{text}</p>
      </div>
    </div>
    </div>
  );
}
