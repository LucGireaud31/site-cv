import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useLocationChange } from "../../hooks/useLocationChange";
import { About } from "../About";
import { Services } from "../Services";
import { HaveAProject } from "./HaveAProject";
import { ProfilPicture } from "./ProfilPicture";
import { Spinning } from "./Spinning";

interface HomeProps {}

export function Home(props: HomeProps) {
  const {} = props;

  useLocationChange();

  return (
    <>
      <Container
        id="home"
        maxW="8xl"
        mt="50px"
        h="calc(100vh - 98px - 50px - 80px)"
      >
        <Flex h="full" alignItems="center" pb="80px">
          <Center w="50%" color="black" textAlign="left">
            <Box>
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
          </Center>
          <Box w="50%">
            <ProfilPicture />
          </Box>
        </Flex>
      </Container>
      <Spinning />
      <Services />
      <About />
    </>
  );
}
