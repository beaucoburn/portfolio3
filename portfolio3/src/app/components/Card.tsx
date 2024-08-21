import { Heading, HStack, Text, VStack, Box } from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
      <Box 
        backgroundColor="white"
        maxW="sm"  
        borderRadius="10"
      >
        <a 
          href={url}
          target="_blank" 
          rel="noopener noreferrer"
        >
        <Image 
          src={imageSrc} 
          alt="title"
          borderradius="10"
          width="100"
          height="50"
        />
        <VStack
          alignItems="baseline"
          padding="2.5"
        >
          <Heading 
            color="black" 
            justify="right"
            fontSize="sm"
          >
            {title}
            </Heading>
          <Text 
            color="gray"
            fontSize="xs"
          >
            {description}
            </Text>
          <HStack>
            <Text 
              color="black" 
              fontSize="xs"
            >
              See more
              </Text>
            <FontAwesomeIcon 
              icon={faArrowRight} 
              color="black" 
              size="lg" 
            />
          </HStack>
        </VStack>
        </a>
      </Box>
  );
};

export default Card;
