"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Headshot from ".//../images/headshot.jpg";
import FullScreenSection from "./FullScreenSection";
import Background from ".//../images/maik-jonietz-_yMciiStJyY-unsplash.jpg";

const greeting = "Hi, I'm Beau Coburn!";
const bio1 = "I'm a software developer and I love building things.";
const bio2 = "I specialize in React and NextJS.";

export default function Hero() {
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#303036"
    >
    <Image
      src={Background}
      alt="Background"
      placeholder="blur"
      quality={50}
      fill
      sizes="100vw"
      objectFit= "cover"
      style={{opacity: 0.5}}
      />
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
            border="1px solid #000000"
          >
            <Image
              src={Headshot}
              height="3000"
              width="1000"
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
              className="text-xl font-bold text-black pt-4 dark:text-white"
            >
              {greeting}
            </CardItem>
          </CardItem>

          <CardItem
            translateZ="60"
            translateX={-60}
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            <CardItem
              as="h1"
              className="text-xl font-bold text-black pt-4 dark:text-white"
            >
              {bio1}
            </CardItem>
          </CardItem>

          <CardItem
            translateZ="70"
            translateX={60}
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            <CardItem
              as="h1"
              className="text-xl font-bold text-black pt-4 dark:text-white"
            >
              {bio2}
            </CardItem>
          </CardItem>
        </CardBody>
      </CardContainer>
    </FullScreenSection>
  );
}
