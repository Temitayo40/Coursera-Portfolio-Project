import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={4} backgroundColor="white" borderRadius={10}>
      <Image src={imageSrc} borderRadius={10} w="100%" />
      <VStack spacing={4} padding={4}>
        <Heading
          size="md"
          textTransform="uppercase"
          alignSelf="flex-start"
          color="black"
        >
          {title}
        </Heading>
        <Text color="gray.800">{description}</Text>
        <HStack w="100%" justifyContent="flex-start">
          <Text
            fontSize="sm"
            color="black"
            alignSelf="flex-start"
            fontWeight="bold"
          >
            See More
          </Text>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="1x"
            color="black"
            style={{
              marginTop: 3,
            }}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
