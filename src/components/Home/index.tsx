import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { About } from "../About";
import { Card } from "../About/Card";
import { MyProjects } from "../MyProjects";
import { HaveAProject } from "./HaveAProject";
import { ProfilPicture } from "./ProfilPicture";
import { Spinning } from "./Spinning";

interface HomeProps {}

export function Home(props: HomeProps) {
  const {} = props;

  return (
    <>
      <Container maxW="8xl" mt="120px" h="calc(100vh - 107px - 120px - 80px)">
        <Flex>
          <Box w="50%" pl={40} color="black" textAlign="left">
            <Heading>Bonjour à tous 👋</Heading>
            <HStack mt={4}>
              <Heading size="lg">Je m'appelle</Heading>
              <Heading color="theme.500" size="lg">
                Luc Gireaud
              </Heading>
            </HStack>
            <Text mt={9} fontSize="xl" color="gray.600" lineHeight={7}>
              Je suis développeur web et mobile.<br></br> Je réalise vos projets
              dans la bonne humeur.
            </Text>

            <HaveAProject />
          </Box>
          <Box w="50%">
            <ProfilPicture />
          </Box>
        </Flex>
      </Container>
      <Spinning />
    </>
  );
}
