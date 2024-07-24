import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Image from "next/image";
import Headshot from ".//../images/headshot.jpg";

const greeting = "Hi, I'm Beau Coburn!";
const bio1 = "I'm a software developer and I love building things.";
const bio2 = "I specialize in React and NextJS.";

export default function Hero() {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2c698d"
    >
      <VStack>
        <Image
          src={Headshot}
          alt="Beau"
          width={225}
          height={200}
 //         borderRadius={50}
        />
        <Heading size="2xl" my={8}>{greeting}</Heading>
        <Heading size="xl" my={8}>{bio1}</Heading>
        <Heading size="xl" my={8}>{bio2}</Heading>
      </VStack>
    </FullScreenSection>
  );
}
