import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { AnimatedDiv } from "../shared/AnimatedDiv";
import { Card } from "./Card";

interface AnimatedScreenProps {
  isActive: boolean;
  onAnimationEnd(): void;
  onAnimationBegin(): void;
  doAnimation: boolean;
  bg: string;
  title: string;
}

export function AnimatedScreen(props: AnimatedScreenProps) {
  const { isActive, onAnimationEnd, onAnimationBegin, bg, title, doAnimation } =
    props;

  const [display, setDisplay] = useState(isActive);

  return (
    <>
      <Box
        className={`animate__animated animate__rotate${
          isActive ? "In" : "Out"
        }DownRight`}
        position="absolute"
        w="full"
        h="full"
        bg={bg}
        display={display ? "block" : "none"}
        style={{
          animationDuration: doAnimation ? "1s" : "0s",
        }}
      />
      <AnimatedDiv
        isActive={isActive}
        animationActive="animate__rotateInDownRight"
        animationInactive="animate__rotateOutDownRight"
        animationDuration={1000}
        doAnimation={doAnimation}
        onAnimationEnd={() => {
          setDisplay(false);
          onAnimationEnd();
        }}
        onAnimationBegin={() => {
          setDisplay(true);
          onAnimationBegin();
        }}
        style={{
          position: "absolute",
          top: "25%",
          display: display ? "block" : "none",
        }}
      >
        <Flex zIndex={1} h="fit-content">
          <Center
            flexDir="column"
            textAlign="center"
            px="160px"
            color="black"
            zIndex={1}
          >
            <Heading fontSize="6xl">{title}</Heading>
            <Text mt={8}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              condimentum odio in purus volutpat accumsan. Ut suscipit, urna nec
              aliquam eleifend, enim orci auctor nibh, at congue nisi tortor sit
              amet quam.
            </Text>
            <Button mt={12} colorScheme="blackAlpha">
              Découvrir React
            </Button>
          </Center>
          <Center>
            <HStack mr={10} spacing={4}>
              <Card isActive={isActive} index={0} doAnimation={doAnimation} />
              <Card isActive={isActive} index={1} doAnimation={doAnimation} />
              <Card isActive={isActive} index={2} doAnimation={doAnimation} />
            </HStack>
          </Center>
        </Flex>
      </AnimatedDiv>
    </>
  );
}
