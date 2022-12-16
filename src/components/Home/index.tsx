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
import { Highlight } from "../shared/Highlight";
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
          <Center w="50%" color="white" textAlign="left">
            <Box>
              <Heading>Bonjour à tous 👋</Heading>
              <HStack mt={4}>
                <Heading size="lg">Je m'appelle</Heading>
                <Heading color="theme.100" size="lg">
                  Luc Gireaud
                </Heading>
              </HStack>
              <Text mt={9} fontSize="xl" color="gray.400">
                Je suis développeur{" "}
                <Highlight color="">Web et mobile</Highlight>
              </Text>
              <Text mt={5} fontSize="xl" color="gray.400">
                Je réalise vos projets <Highlight color>sur mesure</Highlight>{" "}
                pour coller
                <br />
                au maximum à vos besoins tout en restant <br />
                dans la <Highlight color>bonne humeur</Highlight>.
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
