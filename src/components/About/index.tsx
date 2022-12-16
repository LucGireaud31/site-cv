import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Frame } from "./Frame";

interface AboutProps {}

export function About(props: AboutProps) {
  const {} = props;

  return (
    <Container
      maxW="8xl"
      h="calc(100vh - 80px)"
      display="flex"
      alignItems="center"
      id="about"
    >
      <HStack align="center" justifyContent="center" spacing="150px">
        <Frame />
        <VStack w="40%" align="left" spacing={10}>
          <Box>
            <Heading color="theme.100">A propos de moi</Heading>
            <Box w="150px" h="8px" bg="theme.400" rounded="sm" mt={2} />
          </Box>
          <Text color="white">
            Je passe la majorité de mon temps à découvrir et produire, j'adore
            créer, que ce soit pour moi ou les autres.
            <br />
            <br />
            J'ai obtenu en 2022 une licence APSIO (Analyste Programmeur de
            Systèmes Informatiques Ouverts) à Blagnac.
            <br />
            <br />2 années en tant que développeur Web et mobile chez
            Nomattitude ainsi que de nombreux projets personnels me permettent
            d'avoir le bagage et l'expérience nécessaire pour créer une
            application capable de défier la concurrence à prix raisonnable.
          </Text>
          <HStack>
            <Button bg="theme.400" _hover={{ bg: "theme.500" }}>
              Me contacter
            </Button>
            <Button
              as="a"
              variant="outline"
              href="/documents/cv.pdf"
              target="_blank"
              color="gray.300"
            >
              Télécharger mon CV
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Container>
  );
}
