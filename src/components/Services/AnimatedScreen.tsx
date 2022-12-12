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
  title: string;
  theme: string;
}

export function AnimatedScreen(props: AnimatedScreenProps) {
  const {
    isActive,
    onAnimationEnd,
    onAnimationBegin,
    theme,
    title,
    doAnimation,
  } = props;

  const [display, setDisplay] = useState(isActive);

  return (
    <>
      <Box
        className={`animate__animated animate__rotate${
          isActive ? "In" : "Out"
        }DownRight`}
        position="absolute"
        w="full"
        h="100vh"
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
          top: "20%",
          display: display ? "block" : "none",
        }}
      >
        <Flex zIndex={1} h="fit-content">
          <Center flexDir="column" textAlign="center" zIndex={1}>
            <Heading fontSize="7xl" color={theme}>
              {title}
            </Heading>
            <Text mt={8} px="160px" color="white" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              condimentum odio in purus volutpat accumsan. Ut suscipit, urna nec
              aliquam eleifend, enim orci auctor nibh, at congue nisi tortor sit
              amet quam.
            </Text>
            <Button
              as="a"
              href="https://fr.reactjs.org/docs/getting-started.html"
              target="_blank"
              mt={12}
              bg={theme}
              size="lg"
              _hover={{
                bg: "theme",
              }}
            >
              Découvrir React
            </Button>
          </Center>
          <Center>
            <HStack mr={10} spacing={4}>
              {Array.from({ length: 3 }).map((_, i) => (
                <Card
                  key={i}
                  isActive={isActive}
                  index={i}
                  doAnimation={doAnimation}
                  theme={theme}
                />
              ))}
            </HStack>
          </Center>
        </Flex>
      </AnimatedDiv>
    </>
  );
}
