import { Box, Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { About } from "../About";
import { ScrollContainerContext } from "../ScrollContainer";
import { Solutions } from "../Solutions";
import { HaveAProject } from "./HaveAProject";
import { ProfilPicture } from "./ProfilPicture";
import { Spinning } from "./Spinning";

interface HomeProps {}

export function Home(props: HomeProps) {
  const {} = props;

  useEffect(() => {
    function onWheel(e: Event) {}

    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <>
      <Container
        id="home"
        maxW="8xl"
        mt="120px"
        h="calc(100vh - 66px - 120px - 80px)"
      >
        <Flex>
          <Box w="50%" pl={40} color="black" textAlign="left">
            <Heading>Bonjour à tous 👋</Heading>
            <HStack mt={4}>
              <Heading size="lg">Je m'appelle</Heading>
              <Heading color="theme.500" size="lg">
                Luc Gireaud
              </Heading>
            </HStack>
            <Text mt={9} fontSize="xl" color="gray.600">
              Je suis développeur web et mobile.
            </Text>
            <Text mt={2} fontSize="xl" color="gray.600">
              Je réalise vos projets dans la bonne humeur.
            </Text>
            <HaveAProject />
          </Box>
          <Box w="50%">
            <ProfilPicture />
          </Box>
        </Flex>
      </Container>
      <Spinning />
      <Solutions />
      <About />
    </>
  );
}
