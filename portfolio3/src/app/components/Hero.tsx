

import { Heading, VStack } from "@chakra-ui/react";
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
        <div style={{ backgroundColor: "#e0e0e0", padding: "10px", borderRadius: "40px", overflow: "hidden", /*border: "20px solid #e0e0e0",*/ boxShadow: "  20px 20px 60px #989898, -20px -20px 60px #000000", transform: "translateX(-1px) scale(1.01)"}}>
        <Heading size="2xl" my={8}>{greeting}</Heading>
        <Heading size="xl" my={8}>{bio1}</Heading>
        <Heading size="xl" my={8}>{bio2}</Heading>
        </div>
      </VStack>
    </FullScreenSection>
  );
}
