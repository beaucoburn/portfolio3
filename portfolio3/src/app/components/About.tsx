import FullScreenSection from "./FullScreenSection";
import { Heading, VStack, HStack, Text } from "@chakra-ui/react";
import ReactIcon from "../../icons/ReactIcon";
import NextIcon from "../../icons/NextIcon";
import HtmlIcon from "../../icons/HtmlIcon";
import PostgreSQL from "../../icons/PostgresIcon";
import TailwindCSS from "../../icons/TailwindIcon";
import CSSIcon from "../../icons/CssIcon";
import Figma from "../../icons/FigmaIcon";
import Django from "../../icons/DjangoIcon";
import Strapi from "../../icons/StrapiIcon";
import Shopify from "../../icons/ShopifyIcon";
import Prisma from "../../icons/PrismaIcon";
import MySQL from "../../icons/MySQLIcon";
import Python from "../../icons/PythonIcon";
import TypeScriptIcon from "../../icons/TypescriptIcon";

export default function About(){
  return (
    <FullScreenSection
      backgroundColor="#a3a3a3"
      py={16}
      spacing={8}
      isDarkBackground={false}
      id="about-section"
    >
    <HStack p={12}>
      <VStack p={12} position="relative">
        <ReactIcon />
        <HtmlIcon />
        <TypeScriptIcon />
        <PostgreSQL />
        <Strapi />
        <Shopify />
        <Python />
      </VStack>
      <VStack p={12} position="relative">
        <Heading py={8}>About Me</Heading>
        <Text py={8} px={60} size="xl">
          As a passionate Frontend Developer from the United States, my expertise lies in crafting seamless and visually appealing web experiences. My primary focus revolves around utilizing cutting-edge technologies, with a strong proficiency in React and NextJS to build dynamic and responsive user interfaces. Leveraging the power of Tailwind CSS, I bring a keen eye for design and a commitment to creating intuitive and efficient user interfaces. With a deep understanding of web development principles and a penchant for staying abreast of the latest industry trends, I am dedicated to delivering high-quality, performance-driven applications that resonate with both clients and end-users. My journey as a Frontend Developer is characterized by a commitment to innovation, attention to detail, and a genuine passion for creating exceptional digital experiences.
        </Text>
      </VStack>
      <VStack p={12} position="relative">
        <NextIcon />
        <CSSIcon />
        <TailwindCSS />
        <Figma />
        <Prisma />
        <Django />
        <MySQL />
      </VStack>
    </HStack>
    </FullScreenSection>
  )
}
// For more icons go to svgl.app
