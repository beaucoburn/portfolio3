

/*import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Image from "next/image";
import Headshot from ".//../images/headshot.jpg";
import Background from ".//../images/maik-jonietz-_yMciiStJyY-unsplash.jpg";

const greeting = "Hi, I'm Beau Coburn!";
const bio1 = "I'm a software developer and I love building things.";
const bio2 = "I specialize in React and NextJS.";

export default function Hero() {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
    //  isDarkBackground
    //  backgroundImage={`url(${".//../images/maik-jonietz-_yMciiStJyY-unsplash.jpg"})`}
    //  backgroundSize="cover"
    //  backgroundPosition="center"
      backgroundColor="#303036"
      zIndex={10}
    >
      <VStack>
      <div style={{ borderRadius: "40px", overflow: "hidden", border: "20px solid #303036", boxShadow: "  20px 20px 60px #989898, -20px -20px 60px #000000", transform: "rotateY(30deg) translateZ(10px)", transformStyle: "preserve-3d"}}>
        <Image
          src={Headshot}
          alt="Beau"
          width={225}
          height="auto"
          priority
        />
        </div>
        <div style={{ backgroundColor: "#e0e0e0", padding: "10px", borderRadius: "40px", overflow: "hidden", /*border: "20px solid #e0e0e0",*/ /*boxShadow: "  20px 20px 60px #989898, -20px -20px 60px #000000", transform: "translateX(-1px) scale(1.01)"}}>
        <Heading size="2xl" my={8}>{greeting}</Heading>
        <Heading size="xl" my={8}>{bio1}</Heading>
        <Heading size="xl" my={8}>{bio2}</Heading>
        </div>
      </VStack>
    </FullScreenSection>
  );
}*/

"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Headshot from ".//../images/headshot.jpg";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Beau Coburn!";
const bio1 = "I'm a software developer and I love building things.";
const bio2 = "I specialize in React and NextJS.";

export default function Hero() {
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#303036"
      >
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-60 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={Headshot}
            height="3000"
            width="1000"
            border="1px solid #000000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          translateX={40}
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        <CardItem
          as="h1"
          className="text-xl font-bold text-white pt-4 dark:text-white"
        >
        {greeting} 
        </CardItem>
        </CardItem>

        <CardItem
          translateZ="50"
          translateX={-20}
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        <CardItem
          as="h1"
          className="text-xl font-bold text-white pt-4 dark:text-white"
        >
          {bio1}
        </CardItem>
        </CardItem>

        <CardItem
          translateZ="50"
          translateX={20}
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        <CardItem
          as="h1"
          className="text-xl font-bold text-white pt-4 dark:text-white"
        >
        {bio2} 
        </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
    </FullScreenSection>
  );
}

