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
import { Highlight } from "../shared/Highlight";
import { Card } from "./Card";

interface AnimatedScreenProps {
  isActive: boolean;
  onAnimationEnd(): void;
  onAnimationBegin(): void;
  doAnimation: boolean;
  theme: string;
  themeLight: string;
  type: "web" | "mobile";
}

export function AnimatedScreen(props: AnimatedScreenProps) {
  const {
    isActive,
    onAnimationEnd,
    onAnimationBegin,
    theme,
    themeLight,
    doAnimation,
    type,
  } = props;

  const [display, setDisplay] = useState(isActive);

  const title = type == "web" ? "Sites Web" : "Applications mobiles";

  return (
    <>
      <Box
        className={`animate__animated animate__rotate${
          isActive ? "In" : "Out"
        }DownRight`}
        position="absolute"
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
              {type == "web" ? (
                <>
                  Je réalise des sites web en utilisant{" "}
                  <Highlight color={theme}>React</Highlight>, technologie
                  développée par Facebook qui permet d'avoir des interfaces
                  utilisateurs interactives. <br />
                  Ce qui fait majoritairement{" "}
                  <Highlight color={theme}>
                    sa force est la façon dont il charge les pages
                  </Highlight>{" "}
                  car il ne rerend pas toutes les données mais seulement celles
                  qui changent.
                </>
              ) : (
                <>
                  Je propose la création d'applications mobiles en{" "}
                  <Highlight color={theme}>React Native avec Expo </Highlight>.
                  <br />
                  Ces technologies permettent de développer rapidement une seule
                  application mobile qui sera compatible à la fois pour{" "}
                  <Highlight color={theme}> Android et iOS</Highlight>.
                </>
              )}
            </Text>
            {type == "web" ? (
              <Button
                as="a"
                href="https://fr.reactjs.org"
                target="_blank"
                mt={12}
                bg={theme}
                size="lg"
                _hover={{
                  bg: themeLight,
                }}
              >
                Découvrir React
              </Button>
            ) : (
              <HStack mt={12}>
                <Button
                  as="a"
                  href="https://reactnative.dev"
                  target="_blank"
                  bg={theme}
                  size="lg"
                  _hover={{
                    bg: themeLight,
                  }}
                >
                  Découvrir React Native
                </Button>
                <Button
                  as="a"
                  href="https://expo.dev/"
                  target="_blank"
                  bg="theme.300"
                  size="lg"
                  _hover={{
                    bg: "theme.400",
                  }}
                >
                  Découvrir Expo
                </Button>
              </HStack>
            )}
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
                  type={type}
                />
              ))}
            </HStack>
          </Center>
        </Flex>
      </AnimatedDiv>
    </>
  );
}
